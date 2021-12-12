import "./userList.css";
import { Link } from 'react-router-dom';
import React from 'react';
import UserDetail from "./UserDetail";
const List = ({ data  }) => {
    
    
    return(
        <div className="userCss">
             {data.map((user) => (
                
                    <div key={user.login.uuid} className="userMap">
                        
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
                        
                
             ))}
        </div>
    );
};

export default List;