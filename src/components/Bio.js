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
        <p>Doing: Byteconf - free developer conferences for everyone. </p>
        <p>Formerly: Product Hunt, Simple.</p>
        <p>Find me: Twitter, Soundcloud. </p>
      </div>
    )
  }
}

export default Bio
