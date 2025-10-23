import { Link, useLocation } from "react-router"
import { sidebarData } from "~/data/sidebar-data"
import type { NavItem, NavLink } from "~/types/sidebar"
import {
  Avatar,
  Badge,
  Box,
  Button,
  ChevronRightIcon,
  ChevronsLeftIcon,
  Heading,
  HStack,
  IconButton,
  ScrollArea,
  Text,
  useDisclosure,
  VStack,
} from "~/ui"

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const location = useLocation()

  return (
    <Box
      w={isCollapsed ? "16" : "64"}
      h="100vh"
      bg="gray.50"
      borderRight="1px"
      borderColor="gray.200"
      transition="width 0.2s ease"
      display="flex"
      flexDirection="column"
    >
      <VStack align="stretch" gap={4} h="full" p={4}>
        {/* Header */}
        <HStack justify="between" align="center" flexShrink={0}>
          {!isCollapsed && (
            <VStack align="start" gap={1}>
              <Heading size="sm">{sidebarData.teams[0].name}</Heading>
              <Text fontSize="xs" color="gray.500">
                {sidebarData.teams[0].plan}
              </Text>
            </VStack>
          )}
          <IconButton
            variant="ghost"
            size="sm"
            onClick={onToggle}
            aria-label="Toggle sidebar"
          >
            <ChevronsLeftIcon />
          </IconButton>
        </HStack>

        {/* Navigation */}
        <ScrollArea flex={1} pr={2}>
          <VStack align="stretch" gap={6}>
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
    </Box>
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
    <VStack align="stretch" gap={2}>
      {!isCollapsed && (
        <Text fontSize="xs" fontWeight="semibold" color="gray.500" px={2}>
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
        <VStack align="stretch" gap={1} pl={8} pt={1}>
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
    <Button
      as={Link}
      to={item.url}
      variant={checkIsActive(currentPath, item) ? "solid" : "ghost"}
      size="sm"
      justifyContent="start"
      w="full"
      h="auto"
      py={2}
      px={isSubItem ? 2 : 3}
      fontSize={isSubItem ? "xs" : "sm"}
    >
      <HStack gap={3} w="full">
        {item.icon && (
          <Box as={item.icon} boxSize={isSubItem ? 3 : 4} flexShrink={0} />
        )}
        {!isCollapsed && (
          <>
            <Text flex={1} textAlign="start">
              {item.title}
            </Text>
            {item.badge && (
              <Badge size="sm" colorScheme="blue">
                {item.badge}
              </Badge>
            )}
          </>
        )}
      </HStack>
    </Button>
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
