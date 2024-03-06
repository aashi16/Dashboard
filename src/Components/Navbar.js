import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMoon, faUser, faExpandAlt, faCompressAlt, faSun } from '@fortawesome/free-solid-svg-icons'
import '../style/Navbar.css'
import {  useContext } from 'react'
import DashboardContext from '../Helpers/Dashboardcontext.js';
const Navbar = () => {
  const {rescale,setRescale, darkTheme, setDarkTheme} = useContext(DashboardContext);
  return (<div className="navbar">
    <div className='navbar-left'>
   {!rescale && ( <a onClick={()=>{setRescale(!rescale)}}>
    <FontAwesomeIcon icon={faExpandAlt}></FontAwesomeIcon>
    </a>)}
   {rescale &&  <a onClick={()=>{setRescale(!rescale)}}>
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
    </div>
  </div>)
}
export default Navbar;