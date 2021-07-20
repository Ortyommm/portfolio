import { ReactElement, SyntheticEvent } from 'react'
import { NavLink } from 'react-router-dom'
import cl from './Sidebar.module.scss'

const SidebarNavLink = ({ icon, to }: { icon: ReactElement; to: string }) => {
  return (
    <NavLink
      className={`${cl.icon__wrapper}`}
      to={to}
      activeClassName={cl.active}
      style={{ color: '#FFD1C6' }}
    >
      {icon}
    </NavLink>
  )
}

export default SidebarNavLink
