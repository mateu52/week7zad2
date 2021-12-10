import List from "./component/List";
import Front from "./component/Front";
import UserDetail from "./component/UserDetail";
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [users, setUsers] = useState([]);
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
      <div>
        <nav>
          <p><Link to="/">Front</Link></p>
          <p><Link to="/List">Lista</Link></p>
          {/* <p><Link to={`/UserDetail/${id}`}>User details</Link></p> */}
        </nav>

        <Routes>
            <Route exact path="/" element = { 
              <Front /> } 
            />
            <Route path="/List" element = { 
              <List data = { users } /> } 
            />
            <Route path='/UserDetail/:id' > 
              <UserDetail user = { users } />
            </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
