import React from 'react';
import "./userList.css";
import Map from './Map';
import { useParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
//import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

const UserInfo = ( { user} ) => {

    const { id } = useParams();
    const { name, picture, email, location, registered } = user.find((user) => user.login.uuid === id)
    const person = name ? `${name.first} ${name.last}` : "no name";
    return (
        <div className="userMap"> 
        
            <p>
                <img alt="foto" src={ picture.large } ></img></p>            
            <p>
                { person }
            </p>
            <p>
                { location.street.name }: 
                { location.street.number }
            </p>

            <p>{ email }</p>
            <p>{ new Date( registered.date ).toDateString() }</p>
            
            <p>
                <Map 
                    position={[location.coordinates.latitude,location.coordinates.longitude]}
                />
            </p>
        
        </div>   
    )
    
}
export default UserInfo;

//Utworzyć route dla ścieżek komponentów