
import React, { useEffect, useRef, ReactElement } from "react";
import ReactDOM from "react-dom";


import { Wrapper } from "@googlemaps/react-wrapper";


const markers = [
    { lat: -25.363, lng: 131.044 },
    { lat: -15.363, lng: 122.044 }
];

const Map = ({ onClick, onIdle, children, style, ...options }) => {
    const ref = React.useRef(null);
    const [map, setMap] = React.useState();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    React.useEffect(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);

    React.useEffect(() => {
        if (map) {
            ["click", "idle"].forEach((eventName) =>
                window.google.maps.event.clearListeners(map, eventName)
            );

            if (onClick) {
                map.addListener("click", onClick);
            }

            if (onIdle) {
                map.addListener("idle", () => onIdle(map));
            }
        }
    }, [map, onClick, onIdle]);

    return (
        <>
            <div ref={ref} style={style} />
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { map });
                }
            })}
        </>
    );
};

const Marker = (options) => {
    const [marker, setMarker] = React.useState();
    const contentRef = React.useRef(null);

    React.useEffect(() => {
        if (!marker) {
            setMarker(new window.google.maps.Marker());
        }

        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    React.useEffect(() => {
        if (marker) {
            const infowindow = new window.google.maps.InfoWindow({
                content: `daver`
            });
            marker.setOptions(options);

            marker.addListener("click", () => {
                infowindow.open({
                    anchor: marker,
                    shouldFocus: false
                });
            });
        }
    }, [marker, options]);

    return null;
};


const About = () => {
    const center = { lat: -34.397, lng: 150.644 };
    const zoom = 4;

    return (
        <div className="h-[100vh] border-2 border-black">
            <Wrapper apiKey="AIzaSyAaVA7zFT3nG2pu7OquxpkbsIss4egaENs" >
                <Map
                    center={{ lat: -25.363, lng: 131.044 }}
                    zoom={3}
                    style={{ flexGrow: "1", height: "100%" }}
                >
                    {markers.map((marker) => {
                        return <Marker position={marker} />;
                    })}
                </Map>
            </Wrapper>
        </div>
    );
}

export default About;