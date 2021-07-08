import { Icon, InlineIcon } from '@iconify/react'
import sharpModeEditOutline from '@iconify/icons-ic/sharp-mode-edit-outline'
import sharpWork from '@iconify/icons-ic/sharp-work'
import cl from '../Projects/Projects.module.scss'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Work from './Work'
import Layout from './Layout'
import Self from './Self'
import React from 'react'

export default () => {
  return (
    <div className={cl.projects}>
      <div className={cl.projects__description}>
        <div>
          <h1>Мои проекты</h1>
          <div className="paragraph">
            На этой странице вы сможете найти некоторые мои проекты, начиная от
            полноценных проектов, заканчивая теми, которые я делал для себя/из
            интереса.
          </div>
        </div>
        <div className={cl.icon_pencil}>
          <Icon icon={sharpModeEditOutline} />
        </div>
        <div className={cl.icon_suitcase}>
          <Icon icon={sharpWork} />
        </div>
      </div>
      <div className={cl.projects__nav}>
        <NavLink activeClassName={cl.active} to={'/projects/work'}>
          Работы
        </NavLink>
        <NavLink activeClassName={cl.active} to={'/projects/layout'}>
          Верстка
        </NavLink>
        <NavLink activeClassName={cl.active} to={'/projects/for_me'}>
          Для себя
        </NavLink>
      </div>
      <div className={cl.project_cards__container}>
        <Switch>
          <Route path={'/projects/work'} render={() => <Work />} />
          <Route path={'/projects/layout'} render={() => <Layout />} />
          <Route path={'/projects/for_me'} render={() => <Self />} />
          <Redirect from="/projects" to={'/projects/work'} />
        </Switch>
      </div>
    </div>
  )
}
