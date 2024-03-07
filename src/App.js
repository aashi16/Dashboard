import './App.css';
import {  useState, useEffect } from 'react';
// import axios from 'axios'
import Menubar from './Components/Menubar.js'
import Data from './Data/SampleData.js'
import Layout from './Components/Layout.js';
import Navbar from './Components/Navbar.js';
import DashboardContext from './Helpers/Dashboardcontext.js';
import useScreenSize from './Components/useScreenSize.js';
function App() {
  const screenSize = useScreenSize();
  const [isMobile, setIsMobile] = useState();
  const [itemSelected,setItemSelected] = useState('');
  const [rescale,setRescale] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(()=>{
     setIsMobile(screenSize.width < 1030)
  })
  const clickedItem = (item) => {
    setItemSelected(item);
  }
  const showNavbar = (val) => {
    setMobileNav(val);
  }
  return (
<div className={`App ${rescale ? 'expand' : 'collapse'} ${isMobile ? 'mobileView' : ''} ${!mobileNav && isMobile ? 'hideNavbar' : 'showNavbar'} ${darkTheme ? 'darkTheme': ''}`}>
      <DashboardContext.Provider value={{rescale,setRescale,darkTheme,setDarkTheme,isMobile,setIsMobile}}>
      <Menubar menulist={Data.menuList} selectedItem={clickedItem}/>
      <Navbar showNavbar={showNavbar}/>
      <Layout itemSelected={itemSelected} />
      </DashboardContext.Provider>
      
    </div>
  );
}

export default App;
