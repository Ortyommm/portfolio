import cl from './Projects.module.scss'
import { MouseEvent, ReactElement, useRef } from 'react'

function onMouseMove(e: MouseEvent) {
  const halfWidth = (e.target as HTMLElement).offsetWidth / 2
  const halfHeight = (e.target as HTMLElement).offsetHeight / 2
  ;(e.target as HTMLElement).style.transform = `translateX(${
    (-halfWidth + e.nativeEvent.offsetX) / 10
  }px) scale(1.1) translateY(${(-halfHeight + e.nativeEvent.offsetY) / 10}px)`
}

function onMouseOut(e: MouseEvent) {
  ;(e.target as HTMLElement).style.transform = 'translate(0) scale(1)'
}

export default ({
  src,
  alt,
  href,
  description,
  git,
}: {
  src: string
  alt: string
  href?: string
  description?: string | ReactElement
  git?: string
}) => {
  function revealInfo(e: MouseEvent) {
    ;(info.current! as HTMLDivElement).style.transform = 'translateY(-100%)'
  }
  function hideInfo(e: MouseEvent) {
    ;(info.current! as HTMLDivElement).style.transform = 'translateY(0)'
  }

  const info = useRef(null)

  return (
    <div className={cl.project_card}>
      <div className={cl.project_card_image}>
        <div className={cl.project_card__content}>
          <img
            onClick={revealInfo}
            onMouseMove={onMouseMove}
            onMouseOut={onMouseOut}
            src={src}
            alt={alt}
            className={cl.site_img}
          />
          <div className={cl.project_card__info} ref={info} onClick={hideInfo}>
            {description ? (
              <div className={cl.description}>{description}</div>
            ) : null}
            <div className={cl.project_links}>
              {href ? (
                <a href={href} target="_blank">
                  <img
                    className={cl.redirect_btn}
                    src="/images/icons/redirect-btn.svg"
                    alt="Посетить"
                    title="Посетить"
                  />
                </a>
              ) : null}
              {git ? (
                <a href={git} className={cl.git_btn} target="_blank">
                  <img
                    src="/images/icons/git-btn.svg"
                    alt="Посмотреть на github"
                    title="Посмотреть на github"
                  />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={cl.project_card_footer}>
        <p>{alt}</p>
      </div>
    </div>
  )
}
