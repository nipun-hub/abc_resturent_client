import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { Person } from '@mui/icons-material';

const navBar = ({ setShowLogin, setIsOpen , setisOpenMyAccount }) => {
  const [menu, setmenu] = useState("home");

  const { getTotlCartAmmount, token } = useContext(StoreContext)

  return (
    <div className='navBar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="naubar-menu">
        <Link to='/' onClick={() => { setmenu("home") }} className={menu == "home" ? "active" : null} >Home</Link>
        <Link to='/menu' onClick={() => { setmenu("menu") }} className={menu == "menu" ? "active" : null} >Menu</Link>
        <Link to='/service' onClick={() => { setmenu("service") }} className={menu == "service" ? "active" : null} >Service</Link>
        <Link to='/contact' onClick={() => { setmenu("contact") }} className={menu == "contact" ? "active" : null} >Contsct us</Link>
        {/* <a href='#explore-menu' onClick={() => { setmenu("menu") }} className={menu == "menu" ? "active" : null} >Menu</a> */}
        {/* <a href='#app-download' onClick={() => { setmenu("mobile-app") }} className={menu == "mobile-app" ? "active" : null} >Mobile-app</a> */}
        {/* <a href='#footer' onClick={() => { setmenu("contact us") }} className={menu == "contact us" ? "active" : null} >Contact us</a> */}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" srcset="" />
        <div className="navbar-search-icon">
          {/* <Link to='/cart'><img src={assets.basket_icon} alt="" srcset="" /></Link> */}
          <img src={assets.basket_icon} alt="" srcset="" onClick={() => setIsOpen(true)} />
          <div className={getTotlCartAmmount() === 0 ? null : "dot"}></div>
        </div>
        {
          token.token
            ? <button className='bg-red-800 text-white hover:bg-red-700 rounded-full py-2 px-4' onClick={() => { setisOpenMyAccount(true) }}><Person /> My Account</button>
            : <button className='bg-red-800 text-white hover:bg-red-700 rounded-full py-2 px-4' onClick={() => { setShowLogin(true) }}>sign in</button>
        }
      </div>
    </div>
  )
}

export default navBar
