import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

class Bio extends React.Component {
  render() {
    return (
      <div>
        <p>
          An explorative space, by Kristian Freeman. Kristian is a software
          developer, writer, and musician.{' '}
        </p>
        <p>Doing: <a href="https://byteconf.com">Byteconf - free developer conferences for everyone</a>. </p>
        <p>Formerly: <a href="https://producthunt.com">Product Hunt</a>, <a href="https://simple.com">Simple</a>.</p>
        <p>Find me: <a href="https://twitter.com/imkmf">Twitter</a>, <a href="https://soundcloud.com">Soundcloud</a>.</p>
      </div>
    )
  }
}

export default Bio
