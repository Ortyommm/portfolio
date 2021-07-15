import React from 'react'
import ProjectCard from './ProjectCard'
import cl from './Projects.module.scss'

export default () => {
  return (
    <React.Fragment>
      <ProjectCard
        src="/images/project-images/my-site.png"
        alt="Этот сайт"
        git="https://github.com/Ortyommm/portfolio"
        description="Сайт написан при помощи связки React + TypeScript."
      />
      <ProjectCard
        src="/images/project-images/onenilla.png"
        alt="Сайт OneNilla"
        git="https://github.com/Ortyommm/onenilla"
        href="https://onenilla.netlify.app"
        description="Сайт сервера по игре Minecraft. Написан при помощи React + TypeScript, использован Redux."
      />
    </React.Fragment>
  )
}
