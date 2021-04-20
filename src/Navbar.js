import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./styles.css"

export default function Navbar(props) {

  const {
    navWidth='100%', 
    navHeight=100, 
    navBg='transparent', 
    orientation='space-between',
    vertical=false,
    reverse=false,
    zIndex=900,
    navPadding=20,
    logo,
    logoWidth,
    logoBorderRadius,
    navBoxShadow,
    logoText,
    logoTextColor,
    logoTextSize,
    logoTextWeight=500,
    menuLinks=[]
  } = props

  const [mobWidth, setMobWidth] = useState(navWidth)

  const navStyles = {
    width: mobWidth,
    height: navHeight,
    background: navBg,
    justifyContent: orientation,
    padding: navPadding,
    zIndex,
    boxShadow: navBoxShadow
  }
  const logoStyles = {
    width: logoWidth,
    borderRadius: logoBorderRadius
  }
  const logoTextStyles = {
    fontSize: logoTextSize,
    color: logoTextColor,
    fontWeight: logoTextWeight
  }

  const menulinksrow = menuLinks?.map(({name,url,homepage,sublinks}) => {
    return <NavLink 
      to={url}
      exact={`${homepage}`}
      activeClassName="ran-activemenulink"
    >
    {name}
    </NavLink>
  })

  useEffect(() => {
    window.onresize = () => {
      if(window.innerWidth <= navWidth) {
        setMobWidth('100%')
      }
      else {
        setMobWidth(navWidth)
      }
    }
  },[window.innerWidth])

  return (
    <div 
      className={`ran-navbar ${vertical&&'vertical'} ${reverse&&'reverse'}`}
      style={navStyles}
    >
      <div className="ran-logocont">
        <img src={logo} alt="" style={logoStyles} />
        <span style={logoTextStyles}>{logoText}</span>
      </div>
      <div className="ran-menu">
        {menulinksrow}
      </div>
    </div>
  ) 
}