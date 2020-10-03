import React from 'react'

import './Layout.scss'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        {children}
      </>
    )
  }
}

export default Template
