/* eslint-disable react/jsx-no-undef */
import "./userList.css";
import { Link } from 'react-router-dom';
import React from 'react';
import UserDetail from "./UserDetail";
//import UserDetail from "./UserDetail";
function List({ data  }) {
    
    
    return(
        <div className="userCss">
             {data.map((user) => (
                
                    <div key={user.login.uuid} className="userMap">
                        <div> 
                            <Link to={`/UserDetail/${user.login.uuid}`}>
                                <UserDetail
                                    name = { user.name.first } surname={ user.name.last }
                                    picture = { user.picture.large }
                                    location = { user.location.street.name }
                                    location1 = { user.location.street.number }
                                    city = { user.location.city }
                                    email = { user.email }
                                    date = { user.registered.date }
                                    

                                />
                            </Link>
                        </div>
                    </div>
                        
                
             ))}
        </div>
    )
}

export default List;
/* 
<p>{console.log(user.login.uuid)}
                                <img alt="foto" src={user.picture.large} 
                                value={ user.name.first } onChange={ handleId }
                                ></img></p>
                                
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


 */