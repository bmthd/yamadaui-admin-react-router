import { Avatar, Flex, HStack, Text, VStack } from "~/ui"

const sales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: "/avatars/01.png",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: "/avatars/02.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: "/avatars/03.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: "/avatars/04.png",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    avatar: "/avatars/05.png",
  },
]

export function RecentSales() {
  return (
    <VStack gap={6} w="full">
      {sales.map((sale) => (
        <HStack key={sale.email} gap={4} w="full">
          <Avatar size="sm" name={sale.name} src={sale.avatar} />
          <Flex flex={1} align="center" justify="between" gap={4}>
            <VStack align="start" gap={1}>
              <Text fontSize="sm" fontWeight="medium">
                {sale.name}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {sale.email}
              </Text>
            </VStack>
            <Text fontWeight="medium">{sale.amount}</Text>
          </Flex>
        </HStack>
      ))}
    </VStack>
  )
}
