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
    </React.Fragment>
  )
}
