import { parseWithZod } from '@conform-to/zod/v4'
import { setTimeout } from 'node:timers/promises'
import { redirectWithSuccess } from 'remix-toast'
import { z } from 'zod'
import type { Route } from './+types/route'

export const formSchema = z.object({
  otp: z.string({ error: 'Please enter your otp code.' }),
})

export const action = async ({ request }: Route.ActionArgs) => {
  const submission = parseWithZod(await request.formData(), {
    schema: formSchema,
  })
  if (submission.status !== 'success') {
    return { lastResult: submission.reply() }
  }

  if (submission.value.otp !== '123456') {
    return {
      lastResult: submission.reply({ formErrors: ['Invalid OTP code'] }),
    }
  }
  await setTimeout(1000)

  throw await redirectWithSuccess('/', {
    message: 'You have successfully logged in!',
  })
}

export default function Otp() {
  return null
}
