
import { useMapEvents, Marker } from "react-leaflet";
import { IconLocation } from "@tabler/icons-react";
export const LocationMarker = ({ currentLocation, updateCurrentPosition }) => {
  const map = useMapEvents({
    click: (e) => {
      updateCurrentPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, 13);
    }
  });
  return <Marker  position={currentLocation}></Marker>;
};
