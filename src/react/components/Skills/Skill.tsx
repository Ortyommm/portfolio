import cl from './Skills.module.scss'
import { ReactElement } from 'react'

export default ({ icon, text }: { icon: ReactElement; text: string }) => {
  return (
    <div className={cl.skill}>
      <div className={cl.skill__img}>{icon}</div>
      <div className={cl.skill__text}>{text}</div>
    </div>
  )
}
