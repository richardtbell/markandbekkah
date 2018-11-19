import React from 'react'

const RSVP = () => (
  <div className="container">
    <div className="block">
      <h2>We'd love to know whether you can make it...</h2>
      <form action="https://formspree.io/bekkah.and.marks.wedding@gmail.com" method="POST">
        <p className="name">
          <input
            name="name"
            type="text"
            className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
            placeholder="Name"
            id="name"
          />
        </p>

        <p className="email">
          <input
            name="email"
            type="text"
            className="validate[required,custom[email]] feedback-input"
            id="email"
            placeholder="Email"
          />
        </p>
        <div className="attending">
          <p>Can you make it?</p>
          <p>
            <input type="radio" name="attending" value="true" />
            Yes, can't wait!
          </p>
          <p>
            <input type="radio" name="attending" value="false" />
            No, sorry.
          </p>
        </div>

        <p className="text">
          <textarea
            name="text"
            className="validate[required,length[6,300]] feedback-input"
            id="comment"
            placeholder="Comment"
          />
        </p>

        <div className="submit">
          <input type="submit" value="SEND" id="button-blue" />
          <div className="ease" />
        </div>
      </form>
    </div>
  </div>
)

export default RSVP
