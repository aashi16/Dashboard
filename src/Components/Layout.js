import { Route, Routes } from 'react-router-dom';
import '../style/Layout.css';
import Dashboard from '../Components/Dashboard';
import Customers from '../Components/Customers';
import Orders from '../Components/Orders';
const Layout = (props) => {
  return (<div className='layout'>
   <div className='layout-inner'>
   <Routes>
    <Route path="Dashboard" element={<Dashboard/>}/>
    <Route path="Customers" element={<Customers/>}/>
    <Route path="Orders" element={<Orders/>}/>
    <Route path="Products" element={<Dashboard/>}/>
    <Route path="Analytics" element={<Dashboard/>}/>
    <Route path="Messages" element={<Dashboard/>}/>
    <Route path="Reports" element={<Dashboard/>}/>
    <Route path="Settings" element={<Dashboard/>}/>
   </Routes>
   </div>
  </div>)
}
export default Layout;