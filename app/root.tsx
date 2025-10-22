import { Links, Meta, Scripts, ScrollRestoration, data } from 'react-router'
import { getToast } from 'remix-toast'
import type { Route } from './+types/root'
import './index.css'

export const meta: Route.MetaFunction = () => {
  return [{ title: 'Shadcn Admin React Router v7' }]
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
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  //   {
  //   loaderData: { toastData },
  // }
  // : Route.ComponentProps
  return null
}

export function ErrorBoundary() {
  return null
}
