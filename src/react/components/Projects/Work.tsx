import React from 'react'
import ProjectCard from './ProjectCard'
import cl from './Projects.module.scss'

export default () => {
  return (
    <React.Fragment>
      <ProjectCard
        src="/images/project-images/my-site.png"
        alt="Этот сайт"
        git="https://github.com/Ortyommm/portfolio"
        description="Сайт написан при помощи связки React + TypeScript."
      />
      <ProjectCard
        src="/images/project-images/kazanok.png"
        alt="Казанок"
        href="https://kazanok-sochi.ru/"
        description="Сайт магазина. Добавление товаров происходит через CMS Strapi. Установкой сайта и CMS на сервер (VDS) тоже занимался я."
      />
    </React.Fragment>
  )
}
