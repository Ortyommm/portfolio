import React, { ErrorInfo } from 'react'

import cl from './ErrorBoundary.module.scss'

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false,
  }

  static getDerivedStateFromError(error: Error) {
    return { hasErrored: true }
  }

  // componentDidCatch(error: Error, info: ErrorInfo) {
  //   console.log(error, info)
  // }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className={cl.error}>
          <span>Что-то пошло не так!</span>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
