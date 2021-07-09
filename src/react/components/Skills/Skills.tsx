import cl from './Skills.module.scss'
import Skill from './Skill'
import { Icon, InlineIcon } from '@iconify/react'
import baselineArrowForward from '@iconify/icons-ic/baseline-arrow-forward'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

export default (props: object) => {
  return (
    <React.Fragment>
      <div className={cl.skills__container}>
        <div className={cl.skills}>
          <h1>Навыки</h1>
          <Skill src="/images/icons/JS.svg" text="JavaScript" />
          <Skill src="/images/icons/TS.svg" text="Typescript" />
          <Skill src="/images/icons/React.svg" text="React" />
          <Skill src="/images/icons/CSS.svg" text="CSS (SCSS)" />
          <Skill src="/images/icons/HTML.svg" text="HTML" />
        </div>
        <div className={cl.devtools}>
          <h1>ПО</h1>
          <Skill src="/images/icons/Webstorm.svg" text="WebStorm" />
          <Skill src="/images/icons/Figma.svg" text="Figma" />
          <Skill src="/images/icons/Windows.svg" text="Windows 10" />
        </div>
      </div>
      <NavLink to="/projects" className="link">
        <span>Мои проекты</span>
        <Icon icon={baselineArrowForward} />
      </NavLink>
    </React.Fragment>
  )
}
