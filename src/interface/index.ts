import { StyledIcon } from "@styled-icons/styled-icon"

interface IIcon {
  NAME: string
  COLOR: string
  ICON: StyledIcon
}

interface IIcons {
  [key: string]: IIcon
}

interface IProject {
  image: string
  title: string
  description: string
  skills: IIcon[]
  links: {
    github: string
    live: string
  }
}

export type { IIcons, IIcon, IProject }
