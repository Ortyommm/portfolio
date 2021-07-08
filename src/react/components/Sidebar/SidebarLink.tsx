import { ReactElement, SyntheticEvent } from 'react'
import cl from './Sidebar.module.scss'

const SidebarLink = ({ icon, href }: { icon: ReactElement; href: string }) => {
  return (
    <a className={`${cl.icon__wrapper}`} href={href} target="_blank">
      {icon}
    </a>
  )
}

export default SidebarLink
