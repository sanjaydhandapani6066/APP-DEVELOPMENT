import React from 'react';
import '../../assets/css/home.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/UserSlice';
import {FaBeer} from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

function Home() {
    const user=useSelector(selectUser);
    const adminname= user.name;
    const chartData = [
      { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    ];
  
    return (
      <div className="home">
       <div className="dashboard">
        <h2>Dashboard</h2>
        <ul className="dashboard-menu">
          <li><a className="dashboard-text"href="/home">Home</a></li>
          <li><a className="dashboard-text"href="/profile">Profile &nbsp; <i className="bi bi-person-circle  fs-4 text-white"></i></a></li>
          <li><a className="dashboard-text"href="/users">Users</a></li>
          <li><a className="dashboard-text"href="/campaigns">Campaigns</a></li>
          <li><a className="dashboard-text"href="/emailsub">Email Subscribers</a></li>
          <li><a className="dashboard-text2"href="/login">Log out</a></li>
        </ul>
      </div>
      <div className="main-content">
                <header>
                    <h1 style={{ color: 'white' }}>Welcome {adminname} <FaBeer /></h1>
                </header>
                <br></br>
                <div className="chart-container"> {/* Use the new CSS class for the chart */}
                    <h2>Analysis Chart</h2>
                    <LineChart width={600} height={300} data={chartData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </div>
      </div>
    );
  }
  
  export default Home;