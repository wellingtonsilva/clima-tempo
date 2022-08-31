import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export type MapProps = {
  lat:number;
  lon:number;
}
const Map = ({lat, lon}:MapProps): JSX.Element => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA7xHuC9w0EUSDB7YrmgJajQ06o7UN_eac"
  })

  return (
    <>
    {
    isLoaded ? (
  <GoogleMap
    mapContainerStyle={{width:'100%', maxWidth:'400px', minHeight:'300px',borderRadius:'10px'}}
    center={{
      lat:lat,
      lng:lon,
    }}
    zoom={12}
  >
    <Marker position={{ lat:lat,lng:lon}} />
    
  </GoogleMap>
) : <></>
    }  
    </>
  )
}

export default Map