import { useOutletContext } from "react-router"
import {
  Header,
  ProfileDropdown,
  Search,
  ThemeSwitch,
  TopNav,
} from "~/routes/_authenticated+/_layout/header"
import {
  ActivityIcon,
  Box,
  Button,
  Card,
  CreditCardIcon,
  DollarSignIcon,
  Flex,
  Grid,
  Heading,
  SegmentedControl,
  Text,
  UsersIcon,
  VStack,
} from "~/ui"
import type { DashboardLayoutContext } from "../_layout/route"
import { Overview } from "./overview"
import { RecentSales } from "./recent-sales"

const topNav = [
  { title: "Overview", href: "/", disabled: false },
  { title: "Customers", href: "/customers", disabled: true },
  { title: "Products", href: "/products", disabled: true },
  { title: "Settings", href: "/settings", disabled: true },
]

const segmentItems = [
  { label: "Overview", value: "overview", disabled: false },
  { label: "Analytics", value: "analytics", disabled: true },
  { label: "Reports", value: "reports", disabled: true },
  { label: "Notifications", value: "notifications", disabled: true },
]

export default function Dashboard() {
  const { onSidebarToggle } = useOutletContext<DashboardLayoutContext>()

  return (
    <Box>
      <Header onSidebarToggle={onSidebarToggle}>
        <TopNav links={topNav} />
        <Flex ml="auto" align="center" gap={4}>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </Flex>
      </Header>

      <Box px={4} py={6}>
        <Flex justify="space-between" align="center" mb={6} gap={4} w="full">
          <Heading size="xl" fontWeight="bold">
            Dashboard
          </Heading>
          <Button>Download</Button>
        </Flex>

        <VStack gap={6}>
          <Box overflowX="auto" pb={2}>
            <SegmentedControl.Root
              defaultValue="overview"
              size="sm"
              minW="max-content"
            >
              {segmentItems.map((item) => (
                <SegmentedControl.Item
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  fontWeight="medium"
                >
                  {item.label}
                </SegmentedControl.Item>
              ))}
            </SegmentedControl.Root>
          </Box>

          <VStack gap={6}>
            <Grid
              templateColumns={{
                base: "repeat(4, 1fr)",
                lg: "repeat(2, 1fr)",
                md: "1fr",
              }}
              gap={4}
              w="full"
            >
              <Card.Root borderWidth="1px" borderColor="gray.200">
                <Card.Header pb={2}>
                  <Flex justify="between" align="center">
                    <Text fontSize="sm" fontWeight="medium" color="gray.700">
                      Total Revenue
                    </Text>
                    <Box as={DollarSignIcon} boxSize={4} color="gray.500" />
                  </Flex>
                </Card.Header>
                <Card.Body pt={0}>
                  <Text fontSize="2xl" fontWeight="bold" color="gray.900">
                    $45,231.89
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    +20.1% from last month
                  </Text>
                </Card.Body>
              </Card.Root>

              <Card.Root borderWidth="1px" borderColor="gray.200">
                <Card.Header pb={2}>
                  <Flex justify="between" align="center">
                    <Text fontSize="sm" fontWeight="medium" color="gray.700">
                      Subscriptions
                    </Text>
                    <Box as={UsersIcon} boxSize={4} color="gray.500" />
                  </Flex>
                </Card.Header>
                <Card.Body pt={0}>
                  <Text fontSize="2xl" fontWeight="bold" color="gray.900">
                    +2350
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    +180.1% from last month
                  </Text>
                </Card.Body>
              </Card.Root>

              <Card.Root borderWidth="1px" borderColor="gray.200">
                <Card.Header pb={2}>
                  <Flex justify="between" align="center">
                    <Text fontSize="sm" fontWeight="medium" color="gray.700">
                      Sales
                    </Text>
                    <Box as={CreditCardIcon} boxSize={4} color="gray.500" />
                  </Flex>
                </Card.Header>
                <Card.Body pt={0}>
                  <Text fontSize="2xl" fontWeight="bold" color="gray.900">
                    +12,234
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    +19% from last month
                  </Text>
                </Card.Body>
              </Card.Root>

              <Card.Root borderWidth="1px" borderColor="gray.200">
                <Card.Header pb={2}>
                  <Flex justify="between" align="center">
                    <Text fontSize="sm" fontWeight="medium" color="gray.700">
                      Active Now
                    </Text>
                    <Box as={ActivityIcon} boxSize={4} color="gray.500" />
                  </Flex>
                </Card.Header>
                <Card.Body pt={0}>
                  <Text fontSize="2xl" fontWeight="bold" color="gray.900">
                    +573
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    +201 since last hour
                  </Text>
                </Card.Body>
              </Card.Root>
            </Grid>

            <Grid
              templateColumns={{ base: "4fr 3fr", lg: "1fr" }}
              gap={4}
              w="full"
            >
              <Card.Root borderWidth="1px" borderColor="gray.200">
                <Card.Header>
                  <Heading size="md">Overview</Heading>
                </Card.Header>
                <Card.Body>
                  <Overview />
                </Card.Body>
              </Card.Root>

              <Card.Root borderWidth="1px" borderColor="gray.200">
                <Card.Header>
                  <Heading size="md">Recent Sales</Heading>
                  <Text color="gray.500" fontSize="sm">
                    You made 265 sales this month.
                  </Text>
                </Card.Header>
                <Card.Body>
                  <RecentSales />
                </Card.Body>
              </Card.Root>
            </Grid>
          </VStack>
        </VStack>
      </Box>
    </Box>
  )
}
