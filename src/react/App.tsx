import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

export default () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="container">
        <Switch>
          <Route path="/about" render={() => <About />} />
          <Route path="/skills" render={() => <Skills />} />
          <Route path="/projects" render={() => <Projects />} />
          <Redirect from="/" to="/about" />
        </Switch>
      </div>
    </div>
  )
}
