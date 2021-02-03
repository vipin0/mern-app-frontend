import React,{useRef,useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css'

// const ACCESS_TOKEN = 'pk.f9af2250f453adff66b3b1567278ce1c'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

const Map = props => {
    const mapRef = useRef();

    const { center, zoom } = props;
    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom:zoom
    });
    new window.google.maps.Marker({position:center,map:map})
    },[center,zoom]);

    

    // useEffect(() => {
    //     const map = new mapboxgl.Map({
    //     container: 'modal-hook',
    //     style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    //     center: center, // starting position [lng, lat]
    //     zoom: zoom // starting zoom
    //     });
    //     var marker = new mapboxgl.Marker()
    //     .setLngLat(center)
    //     .addTo(map);
    // },[center,zoom]);

    
    return <div
        ref={mapRef}
        className={`map ${props.className}`}
        style={props.style}>
        </div>
}
export default Map;