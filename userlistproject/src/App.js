import List from "./component/List";
import Front from "./component/Front";
import UserInfo from "./component/UserInfo";
import "./component/userList.css";
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [users, setUsers] = useState();
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then((response) => response.json())
            .then ((data) => {
                setUsers(data.results);
            })
            .catch(error => console.error(error))
    },[]);
  
  return (

    <Router>
      <div className="bodyApp">
        <nav>
          <p><Link to="/" style={{ textDecoration: 'none' }}>Front</Link></p>
          <p><Link to="/List" style={{ textDecoration: 'none' }}>Lista</Link></p>
        </nav>

        <Routes>
            <Route exact path="/" element = { 
              <Front /> } 
            />
            <Route path='/UserDetail/:id' element = { 
              <UserInfo user = { users } /> } 
            />
            <Route path="/List" element = { 
              <List data = { users } /> } 
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


