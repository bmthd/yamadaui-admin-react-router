interface User {
  name: string
  email: string
  avatar: string
}

interface Team {
  name: string
  logo: React.FC
  plan: string
}

interface BaseNavItem {
  title: string
  badge?: string
  icon?: React.ComponentType
}

type NavLink = BaseNavItem & {
  url: string
  items?: never
}

type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { url: string })[]
  url?: never
}

type NavItem = NavCollapsible | NavLink

interface NavGroup {
  title: string
  items: NavItem[]
}

interface SidebarData {
  user: User
  teams: Team[]
  navGroups: NavGroup[]
}

export type {
  NavCollapsible,
  NavGroup as NavGroupProps,
  NavItem,
  NavLink,
  SidebarData,
  User,
  Team,
}
