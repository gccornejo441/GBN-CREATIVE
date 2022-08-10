
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

import { createRoot } from "react-dom/client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { createCustomEqual } from "fast-equals";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";


const About = () => {
    const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = React.useState(3); // initial zoom
    const [zip, setZip] = React.useState("")
    const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
        lat: 0,
        lng: 0,
    });

    const onClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng!]);
    };

    const onIdle = (m: google.maps.Map) => {
        console.log("onIdle");
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    };

    const render = (status: Status) => {
        return <h1>{status}</h1>;
    };

    function getLatLngByZipcode(zipcode: string) {
        let geocoder = new google.maps.Geocoder();
        let address = zipcode;
        // alert(address)
        geocoder.geocode({ 'address': 'zipcode ' + address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results != null) {
                    let latitude = results[0].geometry.location.lat();
                    let longitude = results[0].geometry.location.lng();
                    alert("Latitude: " + latitude + "\nLongitude: " + longitude);
                }
            } else {
                alert("Request failed.")
            }
        });
        // return [latitude, longitude];
    }

    const form = (
        <div
            style={{
                padding: "1rem",
                flexBasis: "250px",
                height: "100%",
                overflow: "auto",
            }}
        >
            <label htmlFor="zip">Zip Code</label>
            <input
                type="number"
                id="zip"
                name="zip"
                value={zip}
                onChange={(event) => getLatLngByZipcode(String(event.target.value))}
            />
            <br />
            <label htmlFor="zoom">Zoom</label>
            <input
                type="number"
                id="zoom"
                name="zoom"
                value={zoom}
                onChange={(event) => setZoom(Number(event.target.value))}
            />
            <br />
            <label htmlFor="lat">Latitude</label>
            <input
                type="number"
                id="lat"
                name="lat"
                value={center.lat}
                onChange={(event) =>
                    setCenter({ ...center, lat: Number(event.target.value) })
                }
            />
            <br />
            <label htmlFor="lng">Longitude</label>
            <input
                type="number"
                id="lng"
                name="lng"
                value={center.lng}
                onChange={(event) =>
                    setCenter({ ...center, lng: Number(event.target.value) })
                }
            />
            <h3>{clicks.length === 0 ? "Click on map to add markers" : "Clicks"}</h3>
            {clicks.map((latLng, i) => (
                <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
            ))}
            <button onClick={() => setClicks([])}>Clear</button>
        </div>
    );

    const staticform = (
        <div>
            <div className="form-group">
                <input className="form-control" type="text" id="locality" value="" placeholder="Enter your locality" />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" id="city" value="" placeholder="Enter your city" />
            </div>
            <div className="form-group">
                <label htmlFor="zoom">Zoom (between 0 and 100):</label>
                <input className="form-control" type="range" id="zoom" min="0" value="3" max="100" />
            </div>
            <div className="form-group">
                <input className="form-control" type="number" id="width" value="1000" placeholder="Enter width of map" />
            </div>
            <div className="form-group">
                <input className="form-control" type="number" id="height" value="800" placeholder="Enter height of map" />
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" value="roadmap" checked name="maptype" />roadmap
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" value="satellite" name="maptype" />satellite
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" value="hybrid" name="maptype" />hybrid
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" value="terrain" name="maptype" />terrain
                </label>
            </div>
        </div>
    )

    const getMap = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();

        const locality = (document.getElementById('locality') as HTMLInputElement).value
        const city = (document.getElementById('city') as HTMLInputElement).value
        const width = (document.getElementById('width') as HTMLInputElement).value
        const height = (document.getElementById('height') as HTMLInputElement).value
        const zoom = (document.getElementById('zoom') as HTMLInputElement).value
        const maptype = (document.querySelector('input[name="maptype"]:checked') as HTMLInputElement).value
        // alert(maptype)

        for (let i = 0; i < 10; i++) {
            if ((i % 7) == 0) {
                alert("Money")
            } else if ((i % 5) == 0) {
                alert("Dolly")
            }
        }

        const mapurl = `https://maps.googleapis.com/maps/api/staticmap?&zoom=10&size=${width}x${height}&maptype=${maptype}&path=color:0x0000ff|weight:5|San+Francisco,CA|Oakland,CA&markers=size:mid%7Ccolor:red%7CSan+Francisco,CA%7COakland,CA%7CSan+Jose,CA&key=AIzaSyC3VCDaWLypkC2vOX_P4J4v-IvhuxadC2k`

        const map = document.getElementById('map') as HTMLImageElement || null

        if (map != null) {
            map.src = mapurl
        }
    }

  

    return (
        <div className="h-[100vh]">
            <Wrapper apiKey={'AIzaSyC3VCDaWLypkC2vOX_P4J4v-IvhuxadC2k'} render={render}>
                <Map
                    center={center}
                    zoom={zoom}
                    onClick={onClick}
                    onIdle={onIdle}
                    style={{ flexGrow: "1", height: "100%" }}
                >
                    {clicks.map((latLng, i) => (
                        <Marker key={i} position={latLng} />
                    ))}
                </Map>
            </Wrapper>
            {/* Basic form for controlling center and zoom of map. */}
            {form}
            {staticform}
            <button className='border-2 border-red-500' onClick={getMap}>Get Map</button>
            <br />
            <div className='border-2 border-black'>
                <div className='border-2 border-blue-500 w-1/2 h-1/3'>
                    <img className='h-full' id="map" />
                </div>
            </div>
        </div>
    );
}


interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    children?: React.ReactNode;
}

const Map = ({
    onClick,
    onIdle,
    children,
    style,
    ...options
}: MapProps) => {

    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}))
        }
    }, [ref, map])

    // because React does not do deep comparisons, a custom hook is used
    // see discussion in https://github.com/googlemaps/js-samples/issues/946
    useDeepCompareEffectForMaps(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);

    React.useEffect(() => {
        if (map) {
            ["click", "idle"].forEach((eventName) =>
                google.maps.event.clearListeners(map, eventName)
            );

            if (onClick) {
                map.addListener("click", onClick);
            }

            if (onIdle) {
                map.addListener("idle", () => onIdle(map));
            }
        }
    }, [map, onClick, onIdle]);


    React.useEffect(() => {
        if (map) {
            const polyline = new window.google.maps.Polyline({
                path: [
                    new google.maps.LatLng(28.613939, 77.209021),
                    new google.maps.LatLng(51.507351, -0.127758),
                    new google.maps.LatLng(40.712784, -74.005941),
                    new google.maps.LatLng(28.213545, 94.868713)
                ],

                strokeColor: "#000FFF",
                strokeOpacity: 0.6,
                strokeWeight: 2,
            })

            polyline.setMap(map)
        }

    }, [map, options])

    return (
        <>
            <div ref={ref} style={style} />
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    return React.cloneElement(child, { map });
                }
            })}
        </>
    )
}


const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
    const [marker, setMarker] = React.useState<google.maps.Marker>();

    React.useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    React.useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);


    React.useEffect(() => {
        if (marker) {
            marker.getPosition()
        }
    }, [marker])

    const bubble = '<div style="width:125px; height:auto; overflow:hidden !important;">' + " to<br /> " + "</div> ";

    React.useEffect(() => {
        if (marker) {
            const infowindow = new window.google.maps.InfoWindow({
                content: bubble,

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
}




const deepCompareEqualsForMaps = createCustomEqual(
    (deepEqual) => (a: any, b: any, meta?: undefined) => {
        if (
            isLatLngLiteral(a) ||
            a instanceof google.maps.LatLng ||
            isLatLngLiteral(b) ||
            b instanceof google.maps.LatLng
        ) {
            return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
        }

        // TODO extend to other types

        // use fast-equals for other objects
        return deepEqual(a, b);
    }
);

function useDeepCompareMemoize(value: any) {
    const ref = React.useRef();

    if (!deepCompareEqualsForMaps(value, ref.current)) {
        ref.current = value;
    }

    return ref.current;
}

function useDeepCompareEffectForMaps(
    callback: React.EffectCallback,
    dependencies: any[]
) {
    React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}


export default About;


