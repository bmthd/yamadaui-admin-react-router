import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router"
import {
  Button,
  type ButtonProps,
  Link as UILink,
  type LinkProps as UILinkProps,
} from "."

interface TextLinkProps
  extends UILinkProps,
    Omit<RouterLinkProps, "color" | "content"> {}

export const TextLink = ({
  colorScheme = "primary",
  ...props
}: TextLinkProps) => {
  return <UILink colorScheme={colorScheme} {...props} />
}

interface ButtonLinkProps
  extends ButtonProps,
    Pick<
      RouterLinkProps,
      | "discover"
      | "prefetch"
      | "preventScrollReset"
      | "relative"
      | "reloadDocument"
      | "replace"
      | "state"
      | "to"
      | "viewTransition"
    > {}

export const ButtonLink = (props: ButtonLinkProps) => {
  return <Button as={RouterLink} {...props} />
}
