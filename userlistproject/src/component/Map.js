
import React from 'react';
import 'leaflet/dist/leaflet.css';
//import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import './userList.css';
import L from 'leaflet';
function Map( {center }) {
  React.useEffect(() => {
    // create map
    L.map('map', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }, []);

    return(
      <div id="map">{center}</div>
    );
}

export default Map;