import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <form action="https://formspree.io/rickib90@gmail.com" method="POST">
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="_replyto" />
      </label>
      <input type="submit" value="RSVP"/>
    </form>
  </div>
)

export default SecondPage
