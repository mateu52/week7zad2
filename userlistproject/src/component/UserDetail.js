import "./userList.css";
import React from 'react';

const UserDetail = ( props ) => {
    
    return (
        <div className="userMap"> 
        
            <p>
                <img alt="foto" src={ props.picture } ></img></p>
                
            <p>
                { props.name } 
                { props.surname }
            </p>
            <p>
                { props.location }: 
                { props.location1 }
            </p>
            <p>{ props.city}{console.log(props.user)}</p>
            <p>{ props.email }</p>
            <p>{ new Date( props.date ).toDateString() }</p>
            
        </div>
    )
}

export default UserDetail;