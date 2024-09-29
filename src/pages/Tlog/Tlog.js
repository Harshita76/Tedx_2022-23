import React from 'react'
import './Tlog.css'

function Tlog() {
  return (
    <div className='main-div container'>
        <form>
        <h1>This page is for tlog</h1>
        <input type="text" id="firstName" placeholder="First Name" required />
        <input type="text" id="lastName" placeholder="Last Name" required />
        <input type="email" id="email" placeholder="Email" required />
        <input type="text" id="mobile" placeholder="Mobile" required />
        <h4>Type Your Message Here...</h4>
        <textarea required></textarea>
        <input type="submit" value="Send" id="button" />
      </form>

    </div>
  )
}

export default Tlog