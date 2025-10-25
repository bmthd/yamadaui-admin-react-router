import { useCallback, useState } from "react"
import { sidebarData } from "~/data/sidebar-data"
import {
  Button,
  Center,
  ChevronsUpDownIcon,
  Heading,
  Menu,
  Text,
  useWindowEvent,
  VStack,
} from "~/ui"

interface TeamSwitcherProps extends Menu.RootProps {}

const { teams } = sidebarData
type ToNumber<S extends string> = S extends `${infer N extends number}`
  ? N
  : never
type TeamKey = ToNumber<Exclude<keyof typeof teams, keyof unknown[]>>

export function TeamSwitcher({ ...props }: TeamSwitcherProps) {
  const [selectedTeam, setSelectedTeam] = useState<TeamKey>(0)
  const currentTeam = sidebarData.teams[selectedTeam]

  useWindowEvent(
    "keydown",
    useCallback((event) => {
      if (event.metaKey) {
        const key = event.key
        const keyNumber = Number(key)
        if (
          !Number.isNaN(keyNumber) &&
          keyNumber >= 1 &&
          keyNumber <= teams.length
        ) {
          setSelectedTeam((keyNumber - 1) as TeamKey)
        }
      }
    }, [])
  )

  return (
    <Menu.Root {...props} size="lg" offset={[-48, 236]}>
      <Menu.Trigger>
        <Button variant="ghost" p="md">
          <Center
            bg="bg.contrast"
            color="fg.contrast"
            borderWidth="1"
            rounded="xl"
            p="sm"
          >
            <currentTeam.logo />
          </Center>
          <VStack>
            <Heading size="sm" color="fg.contrast">
              {currentTeam.name}
            </Heading>
            <Text fontSize="xs" color="fg.contrast">
              {currentTeam.plan}
            </Text>
          </VStack>
          <ChevronsUpDownIcon boxSize={4} />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Header>Teams</Menu.Header>
        <Menu.Group>
          {teams.map((team, index) => (
            <Menu.Item
              key={team.name}
              onClick={() => setSelectedTeam(index as TeamKey)}
            >
              <Center borderWidth="1" rounded="sm" p="xs">
                <team.logo />
              </Center>
              <Text fontSize="sm">{team.name}</Text>
              <Menu.Command>⌘ {index + 1}</Menu.Command>
            </Menu.Item>
          ))}
        </Menu.Group>
      </Menu.Content>
    </Menu.Root>
  )
}
