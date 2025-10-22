import { parseWithZod } from '@conform-to/zod/v4'
import { setTimeout } from 'node:timers/promises'
import { redirectWithSuccess } from 'remix-toast'
import { z } from 'zod'
import type { Route } from './+types/route'

export const formSchema = z
  .object({
    email: z.email({
      error: (issue) =>
        issue.input === undefined
          ? 'Please enter your email'
          : 'Invalid email address',
    }),
    password: z
      .string({
        error: 'Please enter your password',
      })
      .min(7, {
        message: 'Password must be at least 7 characters long',
      }),
    confirmPassword: z
      .string({
        error: 'Please enter your password',
      })
      .min(7, {
        message: 'Password must be at least 7 characters long',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  })

export const action = async ({ request }: Route.ActionArgs) => {
  const submission = parseWithZod(await request.formData(), {
    schema: formSchema,
  })
  if (submission.status !== 'success') {
    return { lastResult: submission.reply() }
  }

  if (submission.value.email === 'name@example.com') {
    return {
      lastResult: submission.reply({
        formErrors: ['User already exists with this email address'],
      }),
    }
  }
  await setTimeout(1000)

  throw await redirectWithSuccess('/', {
    message: 'Account created successfully!',
  })
}

export default function SignUp() {
  return null
}
