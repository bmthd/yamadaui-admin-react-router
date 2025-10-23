import { Outlet } from "react-router"
import { Sidebar } from "~/routes/_authenticated+/_layout/sidebar"
import { Box, Flex, useDisclosure } from "~/ui"

export type DashboardLayoutContext = {
  onSidebarToggle: () => void
  isSidebarOpen: boolean
}

export default function DashboardLayout() {
  const { open, onToggle } = useDisclosure({ defaultOpen: true })

  const outletContext: DashboardLayoutContext = {
    onSidebarToggle: onToggle,
    isSidebarOpen: open,
  }

  return (
    <Flex h="100vh">
      <Sidebar isCollapsed={!open} onToggle={onToggle} />
      <Box flex={1} overflow="auto">
        <Outlet context={outletContext} />
      </Box>
    </Flex>
  )
}
