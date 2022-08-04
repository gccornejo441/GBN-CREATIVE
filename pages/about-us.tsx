
// import React, { useEffect, useRef, ReactElement } from "react";
// import ReactDOM from "react-dom";
import * as React from 'react';

// import { Wrapper } from "@googlemaps/react-wrapper";


// const markers = [
//     { lat: -25.363, lng: 131.044 },
//     { lat: -15.363, lng: 122.044 }
// ];

// const Map = ({ onClick, onIdle, children, style, ...options }) => {
//     const ref = React.useRef(null);
//     const [map, setMap] = React.useState();

//     React.useEffect(() => {
//         if (ref.current && !map) {
//             setMap(new window.google.maps.Map(ref.current, {}));
//         }
//     }, [ref, map]);

//     React.useEffect(() => {
//         if (map) {
//             map.setOptions(options);
//         }
//     }, [map, options]);

//     React.useEffect(() => {
//         if (map) {
//             ["click", "idle"].forEach((eventName) =>
//                 window.google.maps.event.clearListeners(map, eventName)
//             );

//             if (onClick) {
//                 map.addListener("click", onClick);
//             }

//             if (onIdle) {
//                 map.addListener("idle", () => onIdle(map));
//             }
//         }
//     }, [map, onClick, onIdle]);

//     return (
//         <>
//             <div ref={ref} style={style} />
//             {React.Children.map(children, (child) => {
//                 if (React.isValidElement(child)) {
//                     return React.cloneElement(child, { map });
//                 }
//             })}
//         </>
//     );
// };

// const Marker = (options) => {
//     const [marker, setMarker] = React.useState();
//     const contentRef = React.useRef(null);

//     const svgMarker = {
//         path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
//         fillColor: "blue",
//         fillOpacity: 0.6,
//         strokeWeight: 0,
//         rotation: 0,
//         scale: 2,
//         anchor: new google.maps.Point(15, 30),
//     };

//     React.useEffect(() => {
//         if (!marker) {
//             setMarker(new window.google.maps.Marker({
//                 position: map.getCenter(),
//                 icon: svgMarker,
//                 map: map
//             }));
//         }

//         return () => {
//             if (marker) {
//                 marker.setMap(null);
//             }
//         };
//     }, [marker]);

//     React.useEffect(() => {
//         if (marker) {
//             const infowindow = new window.google.maps.InfoWindow({
//                 content: `mONEY`
//             });
//             marker.setOptions(options);

//             marker.addListener("click", () => {
//                 infowindow.open({
//                     anchor: marker,
//                     shouldFocus: false
//                 });
//             });
//         }
//     }, [marker, options]);

//     return null;
// };


// const About = () => {
//     const center = { lat: -34.397, lng: 150.644 };
//     const zoom = 4;

//     return (
//         <div className="h-[100vh] border-2 border-black">
//             <Wrapper apiKey={process.env.GOOGLEAPI} >
//                 <Map
//                     center={{ lat: 33.82767400018077, lng: -117.65087533185097 }}
//                     zoom={15}
//                     style={{ flexGrow: "1", height: "100%" }}
//                 >
//                     {markers.map((marker) => {
//                         return <Marker position={marker} />;
//                     })}
//                 </Map>
//             </Wrapper>
//         </div>
//     );
// }

// export default About;

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
}

const Map = ({
    onClick,
    onIdle,
    style,
}: MapProps) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}))
        }
    }, [ref, map])
    return (
        <div ref={ref} />
    )
}

const About = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}))
        }
    }, [ref, map])

    return (
        <div>
        </div>
    );
}

export default About;