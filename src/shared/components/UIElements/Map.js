import React,{useRef,useEffect} from 'react';

import './Map.css'

// const ACCESS_TOKEN = 'pk.f9af2250f453adff66b3b1567278ce1c'


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
    //             container: 'map',
    //             attributionControl: false, //need this to show a compact attribution icon (i) instead of the whole text
    //             style: 'https://tiles.locationiq.com/v2/streets/vector.json?key='+ACCESS_TOKEN,
    //             zoom: zoom,
    //             center: center
    //         });
    // new mapboxgl.Marker(el2)
    //             .setLngLat({center})
    //             .addTo(map);
    // },[center,zoom]);

    
    return <div
        ref={mapRef}
        className={`map ${props.className}`}
        style={props.style}>
        </div>
}
export default Map;