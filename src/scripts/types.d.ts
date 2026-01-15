/**
 * Marker data interface for SVG map
 */
interface MarkerData {
  id?: number;
  related: string;
  x: number;
  y: number;
  image_src: string;
  area: string;
}

/**
 * Configuration interface for SvgMap
 */
interface SvgMapConfig {
  highlightColor?: string;
  breakpoint?: number;
  labelOffset?: {
    x: number;
    y: number;
  };
}

/**
 * Map area data interface
 */
interface MapAreaData {
  id: string;
  name: string;
  coordinates: string;
  isHighlighted?: boolean;
}
