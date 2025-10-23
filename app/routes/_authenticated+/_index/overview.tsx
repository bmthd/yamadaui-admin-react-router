import { Box, Flex, Text } from "~/ui"

const data = [
  { name: "Jan", total: 4500 },
  { name: "Feb", total: 4200 },
  { name: "Mar", total: 3800 },
  { name: "Apr", total: 2300 },
  { name: "May", total: 5800 },
  { name: "Jun", total: 3900 },
  { name: "Jul", total: 5200 },
  { name: "Aug", total: 3000 },
  { name: "Sep", total: 2800 },
  { name: "Oct", total: 2200 },
  { name: "Nov", total: 1800 },
  { name: "Dec", total: 4800 },
]

export function Overview() {
  const maxValue = Math.max(...data.map((item) => item.total))
  const yAxisValues = [0, 1500, 3000, 4500, 6000]

  return (
    <Box h="350px" w="full">
      <Flex h="full" gap={4}>
        <Flex direction="column" justify="space-between" h="full" py={4}>
          {yAxisValues.reverse().map((value) => (
            <Text
              key={value}
              fontSize="xs"
              color="gray.500"
              textAlign="right"
              w="12"
            >
              ${value}
            </Text>
          ))}
        </Flex>

        <Box flex={1} position="relative">
          <Flex h="full" align="end" justify="space-between" gap={1} px={2}>
            {data.map((item) => {
              const height = Math.max((item.total / maxValue) * 100, 2)

              return (
                <Flex
                  key={item.name}
                  direction="column"
                  align="center"
                  h="full"
                  justify="end"
                  flex={1}
                >
                  <Box
                    w="full"
                    maxW="32px"
                    bg={{ base: "gray.900", _hover: "gray.700" }}
                    borderRadius="sm"
                    h={`${height}%`}
                    minH="2px"
                    transition="all 0.3s ease"
                  />
                  <Text
                    fontSize="xs"
                    color="gray.500"
                    mt={2}
                    fontWeight="medium"
                  >
                    {item.name}
                  </Text>
                </Flex>
              )
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
