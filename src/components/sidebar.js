import React from "react"
import { Link } from "gatsby"
import { FaTwitter, FaGithub, FaEnvelope, FaSteam } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby"


const SideBar = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              twitter
              github
              email
              steam
            }
          }
        }
      }
    `
  )
  const steam = "https://store.steampowered.com/app/1315100/Jumping_Jax/"
  const github = "https://github.com/" + site.siteMetadata.social.github
  const email = "mailto:" + site.siteMetadata.social.email
  const twitter = "https://twitter.com/" + site.siteMetadata.social.twitter

  return (
  <aside className="sidebar">

  <div className="sidebar-container">
    <div className="sidebar-logo">
      <Link to="/" className="logo">{ site.siteMetadata.title }</Link>
    </div>

    <menu className="sidebar-menu">
      <li className="menu-items"><Link to="/" className="menu-links" activeClassName="active">Home</Link></li>
      <li className="menu-items"><Link to="/about" className="menu-links" activeClassName="active">About</Link></li>
      <li className="menu-items"><Link to="/games" className="menu-links" activeClassName="active">Game</Link></li>
      <li className="menu-items"><Link to="/contact" className="menu-links" activeClassName="active">Contact</Link></li>
    </menu>

    <div className="btn-group">
      <Link to="/" className="mob-menu-items" activeClassName="active"><button className="navbtn">Home</button></Link>
      <Link to="/about" className="mob-menu-items" activeClassName="active"><button className="navbtn">About</button></Link>
      <Link to="/games" className="mob-menu-items" activeClassName="active"><button className="navbtn">Game</button></Link>
      <Link to="/contact" className="mob-menu-items" activeClassName="active"><button className="navbtn">Contact</button></Link>
    </div>

    <div className="sidebar-social">
      <li className="social-items"><a href={steam} className="social-links" target="_blank" rel="noopener noreferrer"><FaSteam className="social-icons"/></a></li>
      <li className="social-items"><a href={email} className="social-links" target="_blank" rel="noopener noreferrer"><FaEnvelope className="social-icons"/></a></li>
      <li className="social-items"><a href={github} className="social-links" target="_blank" rel="noopener noreferrer"><FaGithub className="social-icons"/></a></li>
      <li className="social-items"><a href={twitter} className="social-links" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icons"/></a></li>
    </div>

  </div>
</aside>
)
}

export default SideBar