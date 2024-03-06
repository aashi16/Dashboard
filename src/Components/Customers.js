import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import '../style/Customers.css'

const Customers = () => {
  const usersApi =  `https://fakestoreapi.com/users`;
  const [users, setUsers] = useState([]);
    useEffect( () => {
    const getUsers = async () => {
      const response = await axios.get(usersApi); 
    setUsers(response.data); 
    }
    getUsers();
  })
  return <div className="customers">
    <div className="customers-title">Customers</div>
    <Table users={users}></Table>
  </div>
}
export default Customers;