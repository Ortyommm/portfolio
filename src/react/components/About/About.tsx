import React, { MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, InlineIcon } from '@iconify/react'
import baselineArrowForward from '@iconify/icons-ic/baseline-arrow-forward'

import cl from './About.module.scss'

export default () => {
  return (
    <div className={cl.about}>
      <div className={cl.text}>
        <h1>Кто я?</h1>

        <div className="paragraph">
          Я - Junior Frontend разработчик из Сочи по имени Артём.
          <span className={cl.fact}>
            {' '}
            Интересовался компьютерной тематикой ещё с двух лет.
            Доказательство&nbsp;-&nbsp;изображение справа 😉.
          </span>
        </div>

        <div className="paragraph">
          Я контролирую своё время и веду его учёт. Каждый день трачу на
          обучение программированию около 8-9 часов.
        </div>
        <div className="paragraph">
          Я разбираюсь достаточно хорошо в самих компьютерах:
          <ul>
            <li>Умею решать проблемы, связанные с их неисправностью.</li>
            <li>Разбираюсь в комплектующих, могу собрать ПК с нуля.</li>
            <li>Интересуюсь их более глубоким устройством и работой.</li>
          </ul>
        </div>
        <div className="paragraph">
          Помимо веб-программирования пробовал себя в работе с Photoshop,
          Davinci Resolve и Cinema 4D.
        </div>
        <div className="paragraph">
          Данный сайт сделан полностью мной, включая дизайн, хотя я не являюсь
          веб-дизайнером.
        </div>

        <NavLink to="/skills" className="link">
          <span>Мои навыки</span>
          <Icon icon={baselineArrowForward} />
        </NavLink>
      </div>

      <div className={`${cl.image_right} ${cl.fact}`}>
        <img src="/images/other/me.png" alt="Я в 2 года" />
      </div>
    </div>
  )
}
