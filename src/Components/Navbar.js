import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMoon, faUser, faExpandAlt, faCompressAlt, faSun, faBars } from '@fortawesome/free-solid-svg-icons'
import '../style/Navbar.css'
import {  useContext, useState } from 'react'
import DashboardContext from '../Helpers/Dashboardcontext.js';
const Navbar = (props) => {
  const { showNavbar } = props;
  const [resize, setResize] = useState(false);
  const {rescale,setRescale, darkTheme, setDarkTheme,isMobile ,setIsMobile,mobileNav, setMobileNav} = useContext(DashboardContext);
  const showMobileNav = () => {
    setResize(!resize);
    showNavbar(!resize);
  }
  return (<div className="navbar">
    <div className='navbar-left'>
   {!isMobile && !rescale && ( <a onClick={()=>{setRescale(!rescale)}}>
    <FontAwesomeIcon icon={faExpandAlt}></FontAwesomeIcon>
    </a>)}
   {!isMobile  && rescale &&  <a onClick={()=>{setRescale(!rescale)}}>
    <FontAwesomeIcon icon={faCompressAlt}></FontAwesomeIcon>
    </a>}
    </div>
    <div className='navbar-right'>
    <a>
    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
    </a>
    {!darkTheme && ( <a onClick={()=>{setDarkTheme(!darkTheme)}}>
    <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
    </a>)}
   {darkTheme &&  <a onClick={()=>{setDarkTheme(!darkTheme)}}>
    <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
    </a>}
    <a>
    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    </a>
    {isMobile && (
    (<a onClick={showMobileNav}>
    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
    </a>)
   )}
    </div>
  </div>)
}
export default Navbar;