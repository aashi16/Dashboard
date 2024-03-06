import Card from "./Card";
import CountContent from '../Components/CountContent'
import Data from "../Data/SampleData";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import '../style/Dashboard.css'

const Dashboard = () => {
  const usersApi =  `https://fakestoreapi.com/users`;
  const [users, setUsers] = useState([]);
    useEffect( () => {
    const getUsers = async () => {
      const response = await axios.get(usersApi); 
    setUsers(response.data); 
    }
    getUsers();
  })
  const { dashboard } = Data;
  // const defaultValue = dayjs(new Date().toJSON().slice(0, 10));
  // const [ datepicked, setDatePicked ] = useState(defaultValue);
  return <div className="dashboard">
    <div className="dashboard-title">Dashboard</div>
    <div className="datepicker">
    {/* <DatePicker defaultValue={defaultValue} value={datepicked} onChange={(newValue) => setDatePicked(newValue)} /> */}
    </div>
    <div className="dashboard-cards">
    {dashboard.chart.map((item) => {
      const { title, count, percentage } = item;
      return (<Card key={title} title={title} content={<CountContent count={count.toLocaleString()} percentage={percentage}/>}/>)
    })}
    </div>
    <div className="dashboard-heading">Recent Users</div>
    <Table users={users}></Table>
  </div>
}
export default Dashboard;