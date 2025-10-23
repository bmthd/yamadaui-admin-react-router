import { useState } from "react"
import { Link as RouterLink, useLocation } from "react-router"
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  Kbd,
  Menu,
  MenuIcon,
  MoonIcon,
  PanelLeftIcon,
  SearchIcon,
  Separator,
  SunIcon,
  Text,
  useColorMode,
  useWindowEvent,
  VStack,
} from "~/ui"

interface HeaderProps {
  children?: React.ReactNode
  fixed?: boolean
  onSidebarToggle?: () => void
}

export function Header({
  children,
  fixed = false,
  onSidebarToggle,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useWindowEvent(
    "scroll",
    () => {
      setScrolled(window.scrollY > 10)
    },
    { passive: true }
  )

  return (
    <Box
      as="header"
      position={fixed ? "fixed" : "relative"}
      top={0}
      left={0}
      right={0}
      zIndex={50}
      bg="white"
      borderBottomWidth={1}
      borderColor="gray.200"
      shadow={scrolled ? "sm" : "none"}
      px={4}
      py={1}
    >
      <Flex align="center" gap={{ base: 3, sm: 4 }}>
        <SidebarTrigger onToggle={onSidebarToggle} />
        <Separator orientation="vertical" h={6} />
        {children}
      </Flex>
    </Box>
  )
}

interface SidebarTriggerProps {
  onToggle?: () => void
}

function SidebarTrigger({ onToggle }: SidebarTriggerProps) {
  return (
    <IconButton
      variant="outline"
      size="xs"
      onClick={onToggle}
      aria-disabled={!onToggle}
      icon={<PanelLeftIcon />}
    />
  )
}

interface TopNavProps {
  links: Array<{
    title: string
    href: string
    disabled?: boolean
  }>
}

export function TopNav({ links }: TopNavProps) {
  const location = useLocation()

  return (
    <>
      <Menu.Root>
        <Menu.Trigger>
          <Button
            variant="outline"
            size="sm"
            display={{ base: "none", md: "flex" }}
          >
            <MenuIcon />
          </Button>
        </Menu.Trigger>
        <Menu.Content alignItems="start">
          {links.map((link) =>
            link.disabled ? (
              <Menu.Item key={link.title} disabled>
                <Text color="gray.400">{link.title}</Text>
              </Menu.Item>
            ) : (
              <Menu.Item key={link.href} asChild>
                <RouterLink to={link.href}>
                  <Text>{link.title}</Text>
                </RouterLink>
              </Menu.Item>
            )
          )}
        </Menu.Content>
      </Menu.Root>

      <HStack gap={{ base: 4, lg: 6 }} display={{ base: "flex", md: "none" }}>
        {links.map((link) => {
          const isActive =
            location.pathname === link.href ||
            location.pathname.startsWith(`${link.href}/`)

          return link.disabled ? (
            <Text
              key={link.title}
              fontSize="sm"
              fontWeight="medium"
              color="gray.400"
            >
              {link.title}
            </Text>
          ) : (
            <Box
              key={link.href}
              as={RouterLink}
              to={link.href}
              fontSize="sm"
              fontWeight="medium"
              color={isActive ? "gray.900" : "gray.500"}
              borderBottomWidth={isActive ? "2px" : "0px"}
              borderColor="gray.900"
              pb={1}
              textDecoration="none"
              transition="color 0.2s ease"
            >
              {link.title}
            </Box>
          )
        })}
      </HStack>
    </>
  )
}

export function Search() {
  return (
    <InputGroup.Root
      w={{ base: "full", md: 40, lg: 56, xl: 64 }}
      size="xs"
      display="flex"
      placeItems="center"
    >
      <InputGroup.Element>
        <SearchIcon fontSize="sm" color="gray.500" />
      </InputGroup.Element>
      <Input placeholder="Search" />
      <InputGroup.Element display={{ base: "block", md: "none" }}>
        <Kbd size="sm">⌘K</Kbd>
      </InputGroup.Element>
    </InputGroup.Root>
  )
}

export function ThemeSwitch() {
  const { colorMode, changeColorMode } = useColorMode()

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="outline" size="sm">
          <Icon
            as={colorMode === "light" ? SunIcon : MoonIcon}
            transition="all 0.2s"
          />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.OptionGroup type="radio" value={colorMode}>
          <Menu.OptionItem
            onClick={() => changeColorMode("light")}
            value="light"
          >
            <Flex align="center" gap={2}>
              <SunIcon fontSize="sm" />
              <Text>Light</Text>
            </Flex>
          </Menu.OptionItem>
          <Menu.OptionItem onClick={() => changeColorMode("dark")} value="dark">
            <Flex align="center" gap={2}>
              <MoonIcon fontSize="sm" />
              <Text>Dark</Text>
            </Flex>
          </Menu.OptionItem>
        </Menu.OptionGroup>
        <Menu.Item onClick={() => changeColorMode("system")}>
          <Flex align="center" gap={2}>
            <Icon fontSize="sm" />
            <Text>System</Text>
          </Flex>
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  )
}

export function ProfileDropdown() {
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="ghost" size="sm" p={0}>
          <Avatar size="sm" name="John Doe" src="/avatars/01.png" />
        </Button>
      </Menu.Trigger>
      <Menu.Content alignItems="end" w={56}>
        <Menu.Label>
          <VStack gap={1} align="start">
            <Text fontSize="sm" fontWeight="medium">
              John Doe
            </Text>
            <Text fontSize="xs" color="gray.500">
              m@example.com
            </Text>
          </VStack>
        </Menu.Label>
        <Menu.Separator />
        <Menu.Item>
          <Flex align="center" justify="between" w="full">
            <Text>Profile</Text>
            <Menu.Command>⇧⌘P</Menu.Command>
          </Flex>
        </Menu.Item>
        <Menu.Item>
          <Flex align="center" justify="between" w="full">
            <Text>Billing</Text>
            <Menu.Command>⇧⌘B</Menu.Command>
          </Flex>
        </Menu.Item>
        <Menu.Item>
          <Flex align="center" justify="between" w="full">
            <Text>Settings</Text>
            <Menu.Command>⌘S</Menu.Command>
          </Flex>
        </Menu.Item>
        <Menu.Item>New Team</Menu.Item>
        <Menu.Separator />
        <Menu.Item>
          <Flex align="center" justify="between" w="full">
            <Text>Log out</Text>
            <Menu.Command>⇧⌘Q</Menu.Command>
          </Flex>
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  )
}
