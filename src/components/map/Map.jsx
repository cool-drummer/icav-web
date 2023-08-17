import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import credentials from "../../credentials";


function MapComponent() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));
const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function Map() {
  return (
      <WrappedMap
        googleMapURL={mapURL}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
  );
}

export default Map;
