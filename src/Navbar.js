import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./styles.css"

export default function Navbar(props) {

  const {  
    vertical=false,
    reverse=false,
    customLogo,
    logoImg,
    logoText,
    menuLinks=[],
    navButtons=[],
    scrollPoint=100
  } = props

  const [scrolled, setScrolled] = useState(false)
 
  const menulinksrow = menuLinks?.map(({name,url,homepage,sublinks}) => {
    return <NavLink 
      to={url}
      exact={`${homepage}`}
      activeClassName="ran-activemenulink"
    >
    {name}
    <div className="ran-dropdown">
      {
        sublinks?.map(({name,url}) => {
          return <NavLink 
            to={url} 
            activeClassName="ran-subactivemenulinks" 
          >
            {name}
          </NavLink>
        })
      }
    </div>
    </NavLink>
  })
  const navbtnsrow = navButtons?.map(({name,url,bg,color,icon,className})  => {
    return <Link to={url} className={className}>
      <button style={{color, background:bg}}>{name}<i className={icon}></i></button>
    </Link>
  })

  useEffect(() => {
    let prevScrollpos = window.pageYOffset
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset
      if(window.pageYOffset > scrollPoint) {
        if (prevScrollpos < currentScrollPos) {
          setScrolled(true)
        }  
      }
      else {
        setScrolled(false)
      }
      prevScrollpos = currentScrollPos
    }
    return() => {
      window.onscroll = null
    }
  },[scrolled])

  return (
    <div className={`ran-navbar ${vertical&&'vertical'} ${reverse&&'reverse'} ${scrolled&&'scrolled'}`}>
      <div className="ran-logocont">
        {
          !customLogo?
          <img src={logoImg} alt="" />:
          customLogo
        }
        <span>{logoText}</span>
      </div>
      <div className="ran-middle"> 
      </div>
      <div className="ran-menu">
        {menulinksrow}
        <div className="btncont">
          {navbtnsrow}
        </div>
      </div>
    </div>
  ) 
}