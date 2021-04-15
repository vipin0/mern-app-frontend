import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

const Map = props => {
  const mapRef = useRef();
  
  const { center, zoom } = props;

  // for foogle map


    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom:zoom
    });
    new window.google.maps.Marker({position:center,map:map})
    },[center,zoom]);

    for openlayer map

      useEffect(() => {
        new window.ol.Map({
          target: mapRef.current.id,
          layers: [
            new window.ol.layer.Tile({
              source: new window.ol.source.OSM()
            })
          ],
          view: new window.ol.View({
            center: window.ol.proj.fromLonLat([center.lng, center.lat]),
            zoom: zoom
          })
        });
      }, [center, zoom]);


      // mapboxgl map
      
    // useEffect(() => {
    //     const map = new mapboxgl.Map({
    //     container: mapRef.current.id,
    //     style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    //     center: [center.lng, center.lat], // starting position [lng, lat]
    //     zoom: zoom // starting zoom
    //     });
    //     var marker = new mapboxgl.Marker()
    //     .setLngLat([center.lng, center.lat])
    //     .addTo(map);
    //     var nav = new mapboxgl.NavigationControl();
    //     map.addControl(nav, 'top-left');
    //     var scale = new mapboxgl.ScaleControl({
    //     maxWidth: 80,
    //     unit: 'imperial'
    //     });
    //     map.addControl(scale);

    //     scale.setUnit('metric');
    // },[center,zoom]);


  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;