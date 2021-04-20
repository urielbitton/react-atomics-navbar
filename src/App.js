import { BrowserRouter as Router } from 'react-router-dom'
import Navbar  from './Navbar'

export default function App() {

  const menuLinks = [
    {
      name:'Home',
      url:'/',
      homepage:true
    }, 
    {
      name:'Services',
      url:'/services',
      sublinks: [
        {name:'Serv a',url:'/serv-a'},
        {name:'Serv b',url:'/serv-b'},
        {name:'Serv c',url:'/serv-c'},
        {name:'Serv d',url:'/serv-d'}
      ]
    },
    {
      name:'About',
      url:'/about',
      sublinks: [
        {name:'About a',url:'/abo-a'},
        {name:'About b',url:'/abo-b'},
        {name:'About c',url:'/abo-c'},
      ]
    }, 
    {
      name:'Our Team',
      url:'/our-team',
      sublinks: [
        {name:'Team a',url:'/tea-a'},
      ]
    }, 
    {
      name:'Contact',
      url:'/contact',
      sublinks: [
        {name:'Contact a',url:'/con-a'},
        {name:'Contact b',url:'/con-b'},
        {name:'Contact c',url:'/con-c'},
        {name:'Contact d',url:'/con-d'},
        {name:'Contact e',url:'/con-e'},
        {name:'Contact f',url:'/con-f'},
      ]
    }
  ]

  return (
    <Router>
      <Navbar 
        navWidth={1200}
        navPosition="relative"
        logoImg="https://i.imgur.com/5ZuVzKu.png"
        customLogo={false}
        logoText="Uriel Bitton"
        logoTextSize={18}
        logoTextWeight={500}
        logoTextColor="#28344a"
        logoWidth={40}
        logoBorderRadius={10}
        menuLinks={menuLinks}
        menuLinksMargin="auto 25px"
        menuLinksPadding="5px 0"
      />
    </Router>
  )
}
