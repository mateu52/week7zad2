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

function useInput(event){
  const [value, setValue ] = useState('');
  const sendChange = ( event ) => {
      setValue(event.target.value);
  }
  return [ value ,sendChange ]; 
};

function App() {
  

  const [img, setImg] = useState("heY");
  const [name, setName] = useState('xXx');

  const [ user, setUser ] = useState();
  const handleImg = (event ) => {
    setImg(event.target.value);
  }
  
  return (
    <Router>
      <div>
        <nav>
          <p><Link to="/">Front</Link></p>
          <p><Link to="/List">Lista</Link></p>
          <p><Link to={`/UserDetail/${img}`}>User details</Link></p>
        </nav>

        <Routes>
            <Route exact path="/" element={<Front />} />
            <Route path="/List" element={<Home importDetail = { handleImg } />} />
            <Route path={`/UserDetail/${img}`} 
              element={<UserDetail 
                img = { img } 
                name= { name }
                />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
