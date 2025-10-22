import { Outlet } from "react-router"
import { Box, Flex } from "~/ui"

export default function DashboardLayout() {
  return (
    <Flex h="100vh">
      {/* サイドバーは後で実装 */}
      <Box flex={1}>
        <Outlet />
      </Box>
    </Flex>
  )
}
