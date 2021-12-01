import "./userList.css";
import React,  {useState } from 'react';
function List({userData, importDetail }) {
    const [ id, setId ] = useState();
    const handleId = (event) => {
        setId(event.target.value);
    }
    const checkVal = (value, text) => {
        if (!value) {
            return text;
        }
        return value;
    }
    return(
        <div className="userCss">
             {userData.map((user) => {
                return (
                    <div key={user.login.uuid} className="userMap">
                        <div className="inMap">    
                            <p><img alt="foto" src={user.picture.large}></img></p>
                            <p>
                                {checkVal(user.name.first, "Nie podano imienia")} 
                                {checkVal(user.name.last, "Nie podano nazwiska")}
                            </p>
                            <p>
                                {checkVal(user.location.street.name, "brak")}: 
                                {checkVal(user.location.street.number, "brak")}
                            </p>
                            <p>{user.location.city}</p>
                            <p>{user.email}</p>
                            <p>{new Date(user.registered.date).toDateString()}</p>
                            <button
                                value = { user.login.uuid }
                                onClick = { importDetail }
                            >
                                Wyświetl
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List;
