import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Preloader from './components/Preloader/Preloader'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
// import About from './components/About/About'
// import Skills from './components/Skills/Skills'
// import Projects from './components/Projects/Projects'

const About = React.lazy(() => import('./components/About/About'))
const Skills = React.lazy(() => import('./components/Skills/Skills'))
const Projects = React.lazy(() => import('./components/Projects/Projects'))
const Contact = React.lazy(() => import('./components/Contact/Contact'))

export default () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="container">
        <ErrorBoundary>
          <React.Suspense fallback={<Preloader />}>
            <Switch>
              <Route path="/about" render={() => <About />} />
              <Route path="/skills" render={() => <Skills />} />
              <Route path="/projects" render={() => <Projects />} />
              <Route path="/contact" render={() => <Contact />} />
              <Redirect from="/" to="/about" />
            </Switch>
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}
