import type { SidebarData } from "~/types/sidebar"
import {
  ActivityIcon,
  BellIcon,
  CircleQuestionMarkIcon,
  CommandIcon,
  FileQuestionMarkIcon,
  GalleryVerticalEndIcon,
  LayoutDashboardIcon,
  LockIcon,
  MessageSquareIcon,
  MonitorIcon,
  PackageIcon,
  PaletteIcon,
  ServerIcon,
  SettingsIcon,
  ShieldIcon,
  ShieldOffIcon,
  SquareCheckIcon,
  TriangleAlertIcon,
  UserIcon,
  UsersIcon,
  UserXIcon,
  WrenchIcon,
} from "~/ui"

export const sidebarData = {
  user: {
    name: "Mizoguchi Coji",
    email: "coji@techtalk.jp",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Yamada Admin",
      logo: CommandIcon,
      plan: "React Router + Yamada UI",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEndIcon,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: ActivityIcon,
      plan: "Startup",
    },
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: LayoutDashboardIcon,
        },
        {
          title: "Tasks",
          url: "/tasks",
          icon: SquareCheckIcon,
        },
        {
          title: "Apps",
          url: "/apps",
          icon: PackageIcon,
        },
        {
          title: "Chats",
          url: "/chats",
          badge: "3",
          icon: MessageSquareIcon,
        },
        {
          title: "Users",
          url: "/users",
          icon: UsersIcon,
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          title: "Auth",
          icon: ShieldIcon,
          items: [
            {
              title: "Sign In",
              url: "/sign-in",
            },
            {
              title: "Sign In (2 Col)",
              url: "/sign-in-2",
            },
            {
              title: "Sign Up",
              url: "/sign-up",
            },
            {
              title: "Forgot Password",
              url: "/forgot-password",
            },
            {
              title: "OTP",
              url: "/otp",
            },
          ],
        },
        {
          title: "Errors",
          icon: TriangleAlertIcon,
          items: [
            {
              title: "Unauthorized",
              url: "/401",
              icon: LockIcon,
            },
            {
              title: "Forbidden",
              url: "/403",
              icon: UserXIcon,
            },
            {
              title: "Not Found",
              url: "/404",
              icon: FileQuestionMarkIcon,
            },
            {
              title: "Internal Server Error",
              url: "/500",
              icon: ServerIcon,
            },
            {
              title: "Maintenance Error",
              url: "/503",
              icon: ShieldOffIcon,
            },
          ],
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: SettingsIcon,
          items: [
            {
              title: "Profile",
              url: "/settings",
              icon: UserIcon,
            },
            {
              title: "Account",
              url: "/settings/account",
              icon: WrenchIcon,
            },
            {
              title: "Appearance",
              url: "/settings/appearance",
              icon: PaletteIcon,
            },
            {
              title: "Notifications",
              url: "/settings/notifications",
              icon: BellIcon,
            },
            {
              title: "Display",
              url: "/settings/display",
              icon: MonitorIcon,
            },
          ],
        },
        {
          title: "Help Center",
          url: "/help-center",
          icon: CircleQuestionMarkIcon,
        },
      ],
    },
  ],
} as const satisfies SidebarData
