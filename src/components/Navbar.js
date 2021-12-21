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
            <button onClick={() => window.location.replace('/')}>Home</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
