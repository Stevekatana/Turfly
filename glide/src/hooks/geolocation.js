import { useState } from "react";

 export function useGeolocation(){
    const [location, setLocation] = useState({
        loaded: false,
        coordinates:{ 
            lat:'',
            lng:''
        }
    })
    const[error, setError] = useState(null)

    function onSuccess(location){
        setLocation({
            loaded:true,
            coordinates:{
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }

    function onError(error){
        setError({
            code: error.code,
            message: error.message,
        });
    }

    function getLocation(){
        if(!('geolocation' in navigator)){
            onError({ code:0 , message: 'GeoLocation is not supported in this browser'})
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        })
    }

    const getAddressName = async (lat, lng) => {
        try {
            // Nominatim is a free service from OpenStreetMap
            const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
            {
                headers: {
                'Accept-Language': 'en', // Ensures results are in English
                'User-Agent': 'GlideApp-Development' // Nominatim requires a User-Agent
                }
            }
            );
            
            const data = await response.json();
            
            // data.display_name is the full address
            // data.address.suburb or data.address.town will usually give you "Syokimau"
            return data.address.suburb || data.address.town || data.address.city || "Unknown Location";
        } catch (error) {
            console.error("Geocoding failed:", error);
            return "Location name unavailable";
        }
    };

    return { location, error, getLocation, getAddressName }
 }