// React
import React from "react";

// Maps
import { Map, Marker } from "pigeon-maps";

const Geolocator = ({ result }) => {
  const { latitude, longitude } = result;

  return (
    <div className="mapWrap">
      {result && (
        <Map height={300} center={[latitude, longitude]} defaultZoom={13}>
          <Marker width={50} color="#fc0349" anchor={[latitude, longitude]} />
        </Map>
      )}
    </div>
  );
};

Geolocator.defualtProps = {
  result: { latitude: "", longitude: "" },
};

export default Geolocator;
