import ProjectCard from './ProjectCard'
import React from 'react'

export default () => {
  return (
    <React.Fragment>
      <ProjectCard
        src="/images/project-images/typing-test.png"
        alt="Typing Test"
        href="https://speed-of-writing.netlify.app"
        git="https://github.com/Ortyommm/speed-of-writing"
        description={
          <React.Fragment>
            Тест скорости печати на клавиатуре. Вдохновлён{' '}
            <a
              className="ordinary_link"
              href="https://10fastfingers.com/"
              target="_blank"
            >
              10fastfingers.com
            </a>
            .
          </React.Fragment>
        }
      />
      <ProjectCard
        src="/images/project-images/bankist-landing.png"
        alt="Лендинг Bankist"
        href="https://ortyommm.github.io/bankist-landing/"
        git="https://github.com/Ortyommm/bankist-landing"
        description="Лендинг ненастоящего банка."
      />
      <ProjectCard
        src="/images/project-images/before-after.png"
        alt="Слайдер 'до-после'"
        href="https://codesandbox.io/s/before-after-eb6p3?file=/index.html"
      />
      <ProjectCard
        src="/images/project-images/drag&drop.png"
        alt="Drag&Drop"
        href="https://drag-and-drop-vanilla-js.netlify.app"
        git="https://github.com/Ortyommm/drag_and_drop"
        description="Drag&Drop компонент при помощи ванильного JS. Без draggable=true в HTML."
      />
      <ProjectCard
        src="/images/project-images/flex-slider.png"
        alt="Расширяющиеся карточки"
        href="https://jsfiddle.net/Ortyommm/gxm8wt4c/"
        description="Нечто, похожее на слайдер. Компонент поддерживает смену изображения стрелками клавиатуры."
      />
      <ProjectCard
        src="/images/project-images/vertical-slider.png"
        alt="Вертикальный слайдер"
        href="https://jsfiddle.net/Ortyommm/wd76oe48/5/"
        description="Слайдер поддерживает смену изображений колёсиком мыши."
      />
      <ProjectCard
        src="/images/project-images/slider-swiper.png"
        alt="Слайдер с поддержкой свайпа"
        href="https://slider-swipe.netlify.app"
        git="https://github.com/Ortyommm/plug-and-play_slider"
        description="Слайдер поддерживает смену изображений через кнопки и свайпы. Добавляется на страницу через JS."
      />
    </React.Fragment>
  )
}
