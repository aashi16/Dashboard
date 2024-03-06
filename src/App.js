import './App.css';
import {  useState } from 'react';

// import axios from 'axios'
import Menubar from './Components/Menubar.js'
import Data from './Data/SampleData.js'
import Layout from './Components/Layout.js';
import Navbar from './Components/Navbar.js';
import DashboardContext from './Helpers/Dashboardcontext.js';

function App() {
  const [itemSelected,setItemSelected] = useState('');
  const [rescale,setRescale] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const clickedItem = (item) => {
    setItemSelected(item);
  }

  return (
<div className={`App ${rescale ? 'fullWidth' : ''} ${darkTheme ? 'darkTheme': ''}`}>
      <DashboardContext.Provider value={{rescale,setRescale,darkTheme,setDarkTheme}}>
      <Menubar menulist={Data.menuList} selectedItem={clickedItem}/>
      <Navbar />
      <Layout itemSelected={itemSelected} />
      </DashboardContext.Provider>
      
    </div>
  );
}

export default App;
