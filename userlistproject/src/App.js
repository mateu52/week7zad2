import Home from "./component/Home";
import Front from "./component/Front";
import UserDetail from "./component/UserDetail";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [ user, setUser ] = useState();
  const handleUser = (event) => {
    setUser(event.target.value);
  }
  return (
    <Router>
      <div>
        <nav>
          <p><Link to="/">Front</Link></p>
          <p><Link to="/List">Lista</Link></p>
        </nav>

        <Routes>
            <Route exact path="/" element={<Front />} />
            <Route path="/List" element={<Home />} />
            <Route path="/UserDeatail" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
