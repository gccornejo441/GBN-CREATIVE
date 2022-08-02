import Script from "next/script";
import { useEffect } from "react";
declare global {
    interface Window {
        initMap: () => void;
    }
}

const About = () => {

        // const handleScriptLoad = () => {
            // let uluru = {
            //     lat: -25.344,
            //     lan: 131.036
            // }
            // // Creates new object
            // let map = new google.maps.Map(
            //     document.getElementById('map') as HTMLElement, { zoom: 4, center: uluru } 
            // );
    
            // let marker = new google.maps.Marker({
            //     position: uluru, map: map
            // })


    function initMap(): void {
        new google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
                mapId: "8e0a97af9386fef",
                center: { lat: 48.85, lng: 2.35 },
                zoom: 12,
            } as google.maps.MapOptions
        );
    }



    return (
        <div>
            <h1>Hello, world!</h1>
            <div className="border-2 border-black">
                <div className="border-2 border-red-500 w-1/2 mx-auto">
                    <div id="map" className="h-[100vh]"></div>
                    {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaVA7zFT3nG2pu7OquxpkbsIss4egaENs&callback=initMap" /> */}
                    {/* <script type="text/javascript" src="/js/googlescript.js" />
                    <Script
                        id="google-maps"
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaVA7zFT3nG2pu7OquxpkbsIss4egaENs"
                        onReady={() => {
                            new google.maps.Map(ref.current, {
                                center: { lat: -34.397, lng: 150.644 },
                                zoom: 8,
                            })
                        }}
                    /> */}
                    <script type="module" src="./js/index.ts"></script>
                    <script
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaVA7zFT3nG2pu7OquxpkbsIss4egaENs&callback=initMap&v=weekly"
                        defer
                    ></script>
                </div>
            </div>
        </div>
    );
}


export default About;