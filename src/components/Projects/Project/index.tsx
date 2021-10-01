import React from "react"
import { ICONS } from "../../../data/Data"
import { IProject } from "../../../interface"
import Con from "./Project.style"

interface IProps {
  project: IProject
}

export default function Project({ project }: IProps) {
  const { image, title, description, skills } = project
  const { github, live } = project.links
  return (
    <Con>
      <Con.Image>
        <img alt={`${title}`} src={image} />
      </Con.Image>
      <Con.Details>
        <Con.Title>{title}</Con.Title>
        <Con.Description>{description}</Con.Description>
        <Con.Skills>
          {skills.map((skill, index) => (
            <Con.Skill key={index}>
              <skill.ICON size={28} />
              <span>{skill.NAME}</span>
            </Con.Skill>
          ))}
        </Con.Skills>
        <Con.CTA>
          <a href={github} target="_blank" rel="noreferrer">
            <ICONS.GITHUB.ICON size={30} />
            <span>{ICONS.GITHUB.NAME}</span>
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            <ICONS.LIVE.ICON size={30} />
            <span>{ICONS.LIVE.NAME}</span>
          </a>
        </Con.CTA>
      </Con.Details>
    </Con>
  )
}
