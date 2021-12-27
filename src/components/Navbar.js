import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio
          </div>
          <div className="links-wrapper">
            <button onClick={() => window.location.assign('/')}>Home</button>
            <button onClick={() => window.open('https://www.instagram.com/marleenvandereerden/', '_blank')}>Instagram</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
