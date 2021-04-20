import { Router } from 'react-router-dom';
import Navbar  from './Navbar'

export default function App() {

  const menuLinks = [
    {name:'Home',url:'/',homepage:true}, 
    {name:'Services',url:'/services',},
    {name:'About',url:'/about',}, 
    {name:'Our Team',url:'/our-team',}, 
    {name:'Contact',url:'/contact',}, 
  ]

  return (
    <Router>
      <Navbar 
        gridWidth={1200}
        logo="https://i.imgur.com/5ZuVzKu.png"
        logoText="Cosior Inc."
        logoTextSize={18}
        logoTextWeight={500}
        logoTextColor="#28344a"
        logoWidth={40}
        logoBorderRadius={10}
        navWidth={1200}
        menuLinks={menuLinks}
      />
    </Router>
  )
}
