import cl from './Skills.module.scss'
import { ReactEventHandler, SyntheticEvent, useState } from 'react'

function replaceSrc(e: SyntheticEvent, src: string): void {
  ;(e.target as HTMLImageElement).src = src
}

export default ({ src, text }: { src: string; text: string }) => {
  const initialSrc = src
  const [isLoaded, setLoaded] = useState(false)
  return (
    <div className={cl.skill}>
      <div className={cl.skill__img}>
        <img
          src="/images/other/placeholder.png"
          alt={text}
          onLoad={
            isLoaded
              ? undefined
              : (((e: SyntheticEvent) => {
                  replaceSrc(e, initialSrc)
                  setLoaded(true)
                }) as ReactEventHandler)
          }
        />
      </div>
      <div className={cl.skill__text}>{text}</div>
    </div>
  )
}
