import { useEffect } from "react"
import {
  data,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router"
import { getToast } from "remix-toast"
import { toast } from "sonner"
import { UIProvider } from "~/ui"
import type { Route } from "./+types/root"

export const meta: Route.MetaFunction = () => {
  return [{ title: "Shadcn Admin React Router v7" }]
}

export const loader = async ({ request }: Route.LoaderArgs) => {
  const { toast, headers } = await getToast(request)
  return data({ toastData: toast }, { headers })
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="group/body scroll-smooth">
        <UIProvider>{children}</UIProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App({
  loaderData: { toastData },
}: Route.ComponentProps) {
  useEffect(() => {
    if (!toastData) {
      return
    }
    let toastFn = toast.info
    if (toastData.type === "error") {
      toastFn = toast.error
    } else if (toastData.type === "success") {
      toastFn = toast.success
    }
    toastFn(toastData.message, {
      description: toastData.description,
      position: "top-right",
    })
  }, [toastData])

  return <Outlet />
}

export function ErrorBoundary() {
  return null
}
