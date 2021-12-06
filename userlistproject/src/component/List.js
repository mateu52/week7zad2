/* eslint-disable react/jsx-no-undef */
import "./userList.css";
//import { Link, Route, Routes } from 'react-router-dom';
import React,  {useState } from 'react';
//import UserDetail from "./UserDetail";
function List({userData, importDetail }) {
    const [ id, setId ] = useState("hello");
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
                         
                            <p value={user.picture.large} onClick={ setId } >
                                <img alt="foto" src={user.picture.large} onChange={ importDetail} ></img></p>
                                
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
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List;
