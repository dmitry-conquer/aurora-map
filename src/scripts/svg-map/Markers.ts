import { getClassName } from "../helpers";
import Modal from "./Modal";

export default class Markers {
  private mapElement: HTMLElement | null = null;
  private markers: SVGImageElement[] = [];
  private modal: Modal;

  constructor() {
    this.mapElement = document.querySelector(".map-svg");
    this.modal = new Modal();
  }

  public renderMarkers(markersData: MarkerData[]): void {
    if (!this.mapElement || !Array.isArray(markersData)) return;

    markersData.forEach((markerData, index) => {
      const markerElement = this.createMarker(markerData, index);
      if (markerElement) {
        this.markers.push(markerElement);
        this.mapElement!.appendChild(markerElement);
      }
    });
  }

  private createMarker(markerData: MarkerData, index: number): SVGImageElement | null {
    if (!markerData.image_src || typeof markerData.x !== "number" || typeof markerData.y !== "number") {
      return null;
    }

    const markerElement = document.createElementNS("http://www.w3.org/2000/svg", "image");

    markerElement.setAttributeNS(null, "href", markerData.image_src);
    markerElement.setAttribute("x", markerData.x.toString());
    markerElement.setAttribute("y", markerData.y.toString());
    markerElement.setAttribute("data-marker-id", index.toString());
    markerElement.setAttribute("data-related", markerData.related);
    markerElement.classList.add(getClassName(".map-marker"));
    markerElement.addEventListener("click", () => this.modal.tiggerModal(index));

    return markerElement;
  }
}
