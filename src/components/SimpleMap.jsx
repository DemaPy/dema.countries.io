import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from "react-leaflet"


export default function SimpleMap({ coords }) {

    return (
        <div style={{
            overflow: "hidden"
        }}>
            <MapContainer center={coords} zoom={7} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coords}>
                </Marker>
            </MapContainer>
        </div>
    );
}