import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PoiMarkers from "./PoiMarkers";
const MAP_API_KEY = import.meta.env.VITE_MAP_KEY;
const MAP_ID = import.meta.env.VITE_MAP_ID;
type Poi = { key: string; location: google.maps.LatLngLiteral };
const locations: Poi[] = [
  {
    key: "Gestoria",
    location: { lat: -31.738778268554448, lng: -60.5098288687152 },
  },
];

const CustomMap = () => {
  return (
    <div className="map-container">
      <APIProvider apiKey={MAP_API_KEY}>
        <Map
          defaultZoom={15}
          defaultCenter={{ lat: -31.738778268554448, lng: -60.5098288687152 }}
          mapId={MAP_ID}
        >
          <PoiMarkers pois={locations} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default CustomMap;
