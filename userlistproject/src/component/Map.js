
import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import './userList.css';
function Map( { position }) {
 
    return(
        <MapContainer
        center={position}
        zoom={13}
        style={{
          width: 300,
          height: 250
        }}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
           © autorzy OpenStreetMap
        </Popup>
      </Marker>
    </MapContainer>
    );
}

export default Map;