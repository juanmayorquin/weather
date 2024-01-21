import { useMapEvents, Marker } from "react-leaflet";
export const LocationMarker = ({ currentLocation,updateCurrentPosition }) => {
  const map = useMapEvents({
    click: (e) => {
        updateCurrentPosition(e.latlng);
      console.log(e.latlng);
    }
  });
  return <Marker position={currentLocation}></Marker>;
};
