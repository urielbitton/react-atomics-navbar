import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./styles.css"

export default function Navbar(props) {

  const {
    navPosition,
    navWidth='100%', 
    navHeight=100, 
    navBg='transparent', 
    orientation='space-between',
    vertical=false,
    reverse=false,
    zIndex=900,
    navPadding=20,
    customLogo,
    logoImg,
    logoWidth,
    logoBorderRadius,
    navBoxShadow,
    logoText,
    logoTextColor,
    logoTextSize,
    logoTextWeight=500,
    menuLinks=[],
    menuLinksColor="#000",
    menuLinksSize=14,
    menuLinksMargin="auto 15px",
    menuLinksPadding,
    subMenuLinksColor="#000",
    subMenuLinksSize=12,
    subMenuLinksPadding="15px 20px",
    subMenuLinksBg="#fff"
  } = props

  const [mobWidth, setMobWidth] = useState(navWidth)

  const navStyles = {
    position: navPosition,
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
  const menuLinksStyles = {
    color: menuLinksColor,
    fontSize: menuLinksSize,
    margin: menuLinksMargin,
    padding: menuLinksPadding,
  }
  const subMenuLinksStyles = {
    color: subMenuLinksColor,
    fontSize: subMenuLinksSize,
    padding: subMenuLinksPadding,
    background: subMenuLinksBg
  }
 
  const menulinksrow = menuLinks?.map(({name,url,homepage,sublinks}) => {
    return <NavLink 
      to={url}
      exact={`${homepage}`}
      activeClassName="ran-activemenulink"
      style={menuLinksStyles}
    >
    {name}
    <div className="ran-dropdown">
      {
        sublinks?.map(({name,url}) => {
          return <NavLink 
            to={url} 
            activeClassName="ran-subactivemenulinks" 
            style={subMenuLinksStyles}
          >
            {name}
          </NavLink>
        })
      }
    </div>
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
        {
          !customLogo?
          <img src={logoImg} alt="" style={logoStyles} />:
          customLogo
        }
        <span style={logoTextStyles}>{logoText}</span>
      </div>
      <div className="ran-middle"> 
      </div>
      <div className="ran-menu">
        {menulinksrow}
      </div>
    </div>
  ) 
}