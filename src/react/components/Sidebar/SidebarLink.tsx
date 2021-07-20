import { ReactElement, SyntheticEvent } from 'react'
import cl from './Sidebar.module.scss'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({ icon, href }: { icon: ReactElement; href: string }) => {
  return (
    <a
      className={`${cl.icon__wrapper}`}
      href={href}
      target="_blank"
      style={{ color: '#FFD1C6' }}
    >
      {icon}
    </a>
  )
}

export default SidebarLink
