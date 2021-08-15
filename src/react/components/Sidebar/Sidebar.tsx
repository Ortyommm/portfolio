import { Icon, InlineIcon } from '@iconify/react'
import baselineAccountCircle from '@iconify/icons-ic/baseline-account-circle'
import baselineConstruction from '@iconify/icons-ic/baseline-construction'
import baselineDashboard from '@iconify/icons-ic/baseline-dashboard'
import baselineMail from '@iconify/icons-ic/baseline-mail'
import telegramFill from '@iconify/icons-akar-icons/telegram-fill'
import vkFill from '@iconify/icons-akar-icons/vk-fill'
import githubFill from '@iconify/icons-akar-icons/github-fill'

import SidebarNavLink from './SidebarNavLink'
import cl from './Sidebar.module.scss'
import SidebarLink from './SidebarLink'
import React from 'react'

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className={cl.fake_block}></div>
      <div className={cl.top_nav}></div>
      <aside className={cl.aside}>
        <nav>
          <div className={cl.sidebar_top}>
            <SidebarNavLink
              to="/about"
              icon={<Icon icon={baselineAccountCircle} className={cl.icon} />}
            />
            <SidebarNavLink
              to="/skills"
              icon={<Icon icon={baselineConstruction} className={cl.icon} />}
            />
            <SidebarNavLink
              to="/projects"
              icon={<Icon icon={baselineDashboard} className={cl.icon} />}
            />
            <SidebarNavLink
              to="/contact"
              icon={<Icon icon={baselineMail} className={cl.icon} />}
            />
          </div>
          <div className={cl.sidebar_bottom}>
            <SidebarLink
              href="https://vk.com/im?sel=391852632"
              icon={<Icon icon={vkFill} className={cl.icon} />}
            />
            <SidebarLink
              href="https://t.me/Meyl_ON"
              icon={<Icon icon={telegramFill} className={cl.icon} />}
            />
            <SidebarLink
              href="https://github.com/Ortyommm"
              icon={<Icon icon={githubFill} className={cl.icon} />}
            />
          </div>
        </nav>
      </aside>
    </React.Fragment>
  )
}
export default Sidebar
