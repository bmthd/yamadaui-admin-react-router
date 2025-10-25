import { useLocation } from "react-router"
import { TeamSwitcher } from "~/components/layout/team-switcher"
import { sidebarData } from "~/data/sidebar-data"
import type { NavItem, NavLink } from "~/types/sidebar"
import {
  Avatar,
  Badge,
  Box,
  Button,
  ChevronRightIcon,
  Flex,
  type FlexProps,
  HStack,
  ScrollArea,
  Show,
  Text,
  useDisclosure,
  VStack,
} from "~/ui"
import { ButtonLink } from "~/ui/link"

interface SidebarProps extends FlexProps {
  isCollapsed: boolean
}

export function Sidebar({ isCollapsed, ...props }: SidebarProps) {
  const location = useLocation()

  return (
    <Flex
      w={isCollapsed ? "16" : "64"}
      bg="bg.panel"
      borderWidth="1px"
      borderColor="border.muted"
      boxShadow="xs"
      transition="width 0.2s ease"
      flexDirection="column"
      {...props}
    >
      <VStack align="stretch" gap={4} h="full" p="sm">
        {/* Header */}
        <TeamSwitcher />

        {/* Navigation */}
        <ScrollArea flex={1} pr={2}>
          <VStack align="stretch" gap={4}>
            {sidebarData.navGroups.map((group) => (
              <NavGroup
                key={group.title}
                title={group.title}
                items={group.items}
                isCollapsed={isCollapsed}
                currentPath={location.pathname}
              />
            ))}
          </VStack>
        </ScrollArea>

        {/* User Section */}
        <Box flexShrink={0}>
          <UserSection user={sidebarData.user} isCollapsed={isCollapsed} />
        </Box>
      </VStack>
    </Flex>
  )
}

interface NavGroupProps {
  title: string
  items: NavItem[]
  isCollapsed: boolean
  currentPath: string
}

function NavGroup({ title, items, isCollapsed, currentPath }: NavGroupProps) {
  return (
    <VStack align="stretch" gap={1}>
      {!isCollapsed && (
        <Text fontSize="xs" fontWeight="semibold" color="gray.500">
          {title}
        </Text>
      )}
      <VStack align="stretch" gap={1}>
        {items.map((item) => (
          <NavItemComponent
            key={item.title}
            item={item}
            isCollapsed={isCollapsed}
            currentPath={currentPath}
          />
        ))}
      </VStack>
    </VStack>
  )
}

interface NavItemProps {
  item: NavItem
  isCollapsed: boolean
  currentPath: string
}

function NavItemComponent({ item, isCollapsed, currentPath }: NavItemProps) {
  const { open: isOpen, onToggle } = useDisclosure({
    defaultOpen: checkIsActive(currentPath, item, true),
  })

  if ("url" in item) {
    return (
      <NavLinkComponent
        item={item as NavLink}
        isCollapsed={isCollapsed}
        currentPath={currentPath}
      />
    )
  }

  // 折りたたみ状態では単純なボタンのみ表示
  if (isCollapsed) {
    return (
      <NavButton
        icon={item.icon}
        title={item.title}
        badge={item.badge}
        isCollapsed={isCollapsed}
        isActive={checkIsActive(currentPath, item)}
      />
    )
  }

  return (
    <Box>
      <NavButton
        icon={item.icon}
        title={item.title}
        badge={item.badge}
        isCollapsed={isCollapsed}
        isActive={checkIsActive(currentPath, item)}
        onClick={onToggle}
        hasSubmenu={true}
        isOpen={isOpen}
      />
      {isOpen && (
        <VStack align="stretch" gap={1} pl={4} pt={1}>
          {item.items.map((subItem) => (
            <NavLinkComponent
              key={subItem.title}
              item={subItem}
              isCollapsed={false}
              currentPath={currentPath}
              isSubItem={true}
            />
          ))}
        </VStack>
      )}
    </Box>
  )
}

interface NavLinkProps {
  item: NavLink
  isCollapsed: boolean
  currentPath: string
  isSubItem?: boolean
}

function NavLinkComponent({
  item,
  isCollapsed,
  currentPath,
  isSubItem = false,
}: NavLinkProps) {
  return (
    <ButtonLink
      to={item.url}
      variant="ghost"
      bg={checkIsActive(currentPath, item) ? "bg.subtle" : undefined}
      size="sm"
      justifyContent="start"
      py={2}
      px={isSubItem ? 6 : 3}
      fontSize={isSubItem ? "xs" : "sm"}
      rounded="md"
    >
      <HStack gap={3} w="full">
        <Show when={!!item.icon}>
          <Box as={item.icon} boxSize={4} flexShrink={0} />
        </Show>
        <Show when={!isCollapsed}>
          <Text flex={1} textAlign="start">
            {item.title}
          </Text>
          <Show when={item.badge}>
            <Badge
              size="sm"
              variant="subtle"
              rounded="full"
              bg="bg.contrast"
              color="fg.contrast"
            >
              {item.badge}
            </Badge>
          </Show>
        </Show>
      </HStack>
    </ButtonLink>
  )
}

interface NavButtonProps {
  icon?: React.ElementType
  title: string
  badge?: string
  isCollapsed: boolean
  isActive: boolean
  onClick?: () => void
  hasSubmenu?: boolean
  isOpen?: boolean
}

function NavButton({
  icon,
  title,
  badge,
  isCollapsed,
  isActive,
  onClick,
  hasSubmenu = false,
  isOpen = false,
}: NavButtonProps) {
  return (
    <Button
      variant={isActive ? "solid" : "ghost"}
      size="sm"
      justifyContent="start"
      w="full"
      h="auto"
      py={2}
      px={3}
      onClick={onClick}
      borderRadius="md"
      mx={1}
    >
      <HStack gap={3} w="full">
        {icon && <Box as={icon} boxSize={4} flexShrink={0} />}
        {!isCollapsed && (
          <>
            <Text flex={1} textAlign="start">
              {title}
            </Text>
            {badge && (
              <Badge size="sm" colorScheme="blue">
                {badge}
              </Badge>
            )}
            {hasSubmenu && (
              <Box
                as={ChevronRightIcon}
                boxSize={3}
                transform={isOpen ? "rotate(90deg)" : "rotate(0deg)"}
                transition="transform 0.2s"
              />
            )}
          </>
        )}
      </HStack>
    </Button>
  )
}

interface UserSectionProps {
  user: { name: string; email: string; avatar: string }
  isCollapsed: boolean
}

function UserSection({ user, isCollapsed }: UserSectionProps) {
  if (isCollapsed) {
    return <Avatar size="sm" src={user.avatar} name={user.name} />
  }

  return (
    <HStack gap={3} p={2} borderRadius="md" _hover={{ bg: "gray.100" }}>
      <Avatar size="sm" src={user.avatar} name={user.name} />
      <VStack align="start" gap={0} flex={1}>
        <Text fontSize="sm" fontWeight="medium">
          {user.name}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {user.email}
        </Text>
      </VStack>
    </HStack>
  )
}

function checkIsActive(
  currentPath: string,
  item: NavItem,
  mainNav = false
): boolean {
  if ("url" in item) {
    return currentPath === item.url || currentPath.split("?")[0] === item.url
  }

  return (
    !!item.items?.some((subItem) => subItem.url === currentPath) ||
    (mainNav &&
      currentPath.split("/")[1] !== "" &&
      currentPath.split("/")[1] === item.items?.[0]?.url?.split("/")[1])
  )
}
