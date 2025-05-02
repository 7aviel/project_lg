import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import PoiMarkers from "./PoiMarkers";
const MAP_API_KEY = import.meta.env.VITE_MAP_KEY;
const MAP_ID = import.meta.env.VITE_MAP_ID;
type Poi = { key: string; location: google.maps.LatLngLiteral };
const locations: Poi[] = [
  {
    key: "Gestoria",
    location: { lat: -31.73870581213701, lng: -60.50978344907594 },
  },
];

const CustomMap = () => {
  return (
    <div className="map-container">
      <APIProvider
        apiKey={MAP_API_KEY}
        onLoad={() => console.log("Maps API has loaded.")}
        onError={(err) => console.error("Maps API failed to load:", err)}
      >
        <Map
          defaultZoom={15}
          defaultCenter={{ lat: -31.73870581213701, lng: -60.50978344907594 }} // Buenos Aires
          mapId={MAP_ID}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log(
              "camera changed:",
              ev.detail.center,
              "zoom:",
              ev.detail.zoom
            )
          }
        >
          <PoiMarkers pois={locations} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default CustomMap;
