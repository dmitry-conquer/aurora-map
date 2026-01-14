import "../styles/main.scss";
import SvgMap from "./svg-map/Map";

declare const mapData: {
  markers: MarkerData[];
  areas: string[];
};

document.addEventListener("DOMContentLoaded", (): void => {
  if (typeof mapData !== "undefined") {
    new SvgMap(mapData.markers || [], mapData.areas || []);
  }
});
