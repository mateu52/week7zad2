import React, {useEffect, useState} from 'react';
import List from './List';
import App from '../App';
import "./userList.css";
function Home({ importDetail }){
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
            <div className="bodyApp">
                        <List
                            userData={users}
                            importDetail = { importDetail } 
                        />
            </div>
    )
    
}
export default Home;