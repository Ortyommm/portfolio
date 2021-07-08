import cl from './Skills.module.scss'
import Skill from './Skill'
import { Icon, InlineIcon } from '@iconify/react'
import baselineArrowForward from '@iconify/icons-ic/baseline-arrow-forward'
import { NavLink } from 'react-router-dom'
import React from 'react'

export default (props: object) => {
  return (
    <React.Fragment>
      <div className={cl.skills__container}>
        <div className={cl.skills}>
          <h1>Навыки</h1>
          <Skill
            icon={<img src="/images/icons/JS.svg" alt="JS" />}
            text="JavaScript"
          />
          <Skill
            icon={<img src="/images/icons/TS.svg" alt="TS" />}
            text="Typescript"
          />
          <Skill
            icon={<img src="/images/icons/React.svg" alt="React" />}
            text="React"
          />
          <Skill
            icon={<img src="/images/icons/CSS.svg" alt="CSS" />}
            text="CSS (SCSS)"
          />
          <Skill
            icon={<img src="/images/icons/HTML.svg" alt="HTML" />}
            text="HTML"
          />
        </div>
        <div className={cl.devtools}>
          <h1>ПО</h1>
          <Skill
            icon={<img src="/images/icons/Webstorm.svg" alt="Webstorm" />}
            text="WebStorm"
          />
          <Skill
            icon={<img src="/images/icons/Figma.svg" alt="Figma" />}
            text="Figma"
          />
          <Skill
            icon={<img src="/images/icons/Windows.svg" alt="Windows" />}
            text="Windows 10"
          />
        </div>
      </div>
      <NavLink to="/projects" className="link">
        <span>Мои проекты</span>
        <Icon icon={baselineArrowForward} />
      </NavLink>
    </React.Fragment>
  )
}
