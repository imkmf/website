import React from 'react'
import { Link } from 'gatsby'

import '../styles/style.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const header = (
      <h1
        style={{
          textShadow: 'rgba(255, 255, 255, 0.5) 1px 1px 1px',
          color: 'transparent',
          textDecoration: 'none',
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          signalnerve
        </Link>
      </h1>
    )
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <div className="gutter" style={{ flex: '1' }} />
        <div style={{ flex: '2' }}>
          {header}
          {children}
        </div>
        <div className="gutter" style={{ flex: '1' }} />
      </div>
    )
  }
}

export default Template
