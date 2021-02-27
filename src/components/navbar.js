import PropTypes from "prop-types"
import React from "react"
import "./navbar.scss"
import logo from "../images/brand/cc-logohorizontal-white.svg"

const Navbar = () => (
  <header className="header">
    <div className="container">
     <a className="nav-logo" href="/">
       <img src={logo} alt="caos creations logo" />
       </a>
       <div className="nav-links-container">
         <a className="nav-link" href="/#games">
           Games
         </a>
         <a className="nav-link"href="/#community">
           Community
         </a>
       </div>
    </div>
  </header>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
