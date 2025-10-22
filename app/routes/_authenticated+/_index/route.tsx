import {
  ActivityIcon,
  Box,
  Button,
  Card,
  Center,
  CreditCardIcon,
  DollarSignIcon,
  Flex,
  Grid,
  Heading,
  HStack,
  Tabs,
  Text,
  UsersIcon,
  VStack,
} from "~/ui"

export default function Dashboard() {
  return (
    <Box p={6}>
      <Flex justify="between" align="center" mb={6}>
        <Heading size="xl" fontWeight="bold">
          Dashboard
        </Heading>
        <Button>Download</Button>
      </Flex>

      <Tabs.Root index={0}>
        <Box overflowX="auto" pb={2}>
          <Tabs.List>
            <Box>Overview</Box>
            <Box opacity={0.5}>Analytics</Box>
            <Box opacity={0.5}>Reports</Box>
            <Box opacity={0.5}>Notifications</Box>
          </Tabs.List>
        </Box>

        <Tabs.Panels>
          <Tabs.Panel index={0}>
            <VStack gap={6}>
              <Grid
                templateColumns={{
                  base: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                }}
                gap={4}
                w="full"
              >
                <Card.Root>
                  <Card.Header pb={2}>
                    <Flex justify="between" align="center">
                      <Text fontSize="sm" fontWeight="medium">
                        Total Revenue
                      </Text>
                      <Box as={DollarSignIcon} boxSize={4} color="gray.500" />
                    </Flex>
                  </Card.Header>
                  <Card.Body pt={0}>
                    <Text fontSize="2xl" fontWeight="bold">
                      $45,231.89
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      +20.1% from last month
                    </Text>
                  </Card.Body>
                </Card.Root>

                <Card.Root>
                  <Card.Header pb={2}>
                    <Flex justify="between" align="center">
                      <Text fontSize="sm" fontWeight="medium">
                        Subscriptions
                      </Text>
                      <Box as={UsersIcon} boxSize={4} color="gray.500" />
                    </Flex>
                  </Card.Header>
                  <Card.Body pt={0}>
                    <Text fontSize="2xl" fontWeight="bold">
                      +2350
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      +180.1% from last month
                    </Text>
                  </Card.Body>
                </Card.Root>

                <Card.Root>
                  <Card.Header pb={2}>
                    <Flex justify="between" align="center">
                      <Text fontSize="sm" fontWeight="medium">
                        Sales
                      </Text>
                      <Box as={CreditCardIcon} boxSize={4} color="gray.500" />
                    </Flex>
                  </Card.Header>
                  <Card.Body pt={0}>
                    <Text fontSize="2xl" fontWeight="bold">
                      +12,234
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      +19% from last month
                    </Text>
                  </Card.Body>
                </Card.Root>

                <Card.Root>
                  <Card.Header pb={2}>
                    <Flex justify="between" align="center">
                      <Text fontSize="sm" fontWeight="medium">
                        Active Now
                      </Text>
                      <Box as={ActivityIcon} boxSize={4} color="gray.500" />
                    </Flex>
                  </Card.Header>
                  <Card.Body pt={0}>
                    <Text fontSize="2xl" fontWeight="bold">
                      +573
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      +201 since last hour
                    </Text>
                  </Card.Body>
                </Card.Root>
              </Grid>

              <Grid
                templateColumns={{ base: "1fr", lg: "4fr 3fr" }}
                gap={4}
                w="full"
              >
                <Card.Root>
                  <Card.Header>
                    <Heading size="md">Overview</Heading>
                  </Card.Header>
                  <Card.Body pl={2}>
                    <Center h="350px" bg="gray.50" borderRadius="md">
                      <Text color="gray.500">
                        Chart will be implemented later
                      </Text>
                    </Center>
                  </Card.Body>
                </Card.Root>

                <Card.Root>
                  <Card.Header>
                    <Heading size="md">Recent Sales</Heading>
                    <Text color="gray.500" fontSize="sm">
                      You made 265 sales this month.
                    </Text>
                  </Card.Header>
                  <Card.Body>
                    <VStack gap={6}>
                      <HStack gap={4} w="full">
                        <Center
                          w={9}
                          h={9}
                          borderRadius="full"
                          bg="gray.200"
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          OM
                        </Center>
                        <Flex flex={1} justify="between" align="center">
                          <Box>
                            <Text fontSize="sm" fontWeight="medium">
                              Olivia Martin
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                              olivia.martin@email.com
                            </Text>
                          </Box>
                          <Text fontWeight="medium">+$1,999.00</Text>
                        </Flex>
                      </HStack>

                      <HStack gap={4} w="full">
                        <Center
                          w={9}
                          h={9}
                          borderRadius="full"
                          bg="gray.200"
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          JL
                        </Center>
                        <Flex flex={1} justify="between" align="center">
                          <Box>
                            <Text fontSize="sm" fontWeight="medium">
                              Jackson Lee
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                              jackson.lee@email.com
                            </Text>
                          </Box>
                          <Text fontWeight="medium">+$39.00</Text>
                        </Flex>
                      </HStack>

                      <HStack gap={4} w="full">
                        <Center
                          w={9}
                          h={9}
                          borderRadius="full"
                          bg="gray.200"
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          IN
                        </Center>
                        <Flex flex={1} justify="between" align="center">
                          <Box>
                            <Text fontSize="sm" fontWeight="medium">
                              Isabella Nguyen
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                              isabella.nguyen@email.com
                            </Text>
                          </Box>
                          <Text fontWeight="medium">+$299.00</Text>
                        </Flex>
                      </HStack>

                      <HStack gap={4} w="full">
                        <Center
                          w={9}
                          h={9}
                          borderRadius="full"
                          bg="gray.200"
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          WK
                        </Center>
                        <Flex flex={1} justify="between" align="center">
                          <Box>
                            <Text fontSize="sm" fontWeight="medium">
                              William Kim
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                              will@email.com
                            </Text>
                          </Box>
                          <Text fontWeight="medium">+$99.00</Text>
                        </Flex>
                      </HStack>

                      <HStack gap={4} w="full">
                        <Center
                          w={9}
                          h={9}
                          borderRadius="full"
                          bg="gray.200"
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          SD
                        </Center>
                        <Flex flex={1} justify="between" align="center">
                          <Box>
                            <Text fontSize="sm" fontWeight="medium">
                              Sofia Davis
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                              sofia.davis@email.com
                            </Text>
                          </Box>
                          <Text fontWeight="medium">+$39.00</Text>
                        </Flex>
                      </HStack>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </Grid>
            </VStack>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Root>
    </Box>
  )
}
