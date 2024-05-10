import axios from "axios";

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface Location {
  lat: number;
  lng: number;
}

interface Viewport {
  northeast: Location;
  southwest: Location;
}

interface Geometry {
  bounds?: { northeast: Location; southwest: Location };
  location: Location;
  location_type: string;
  viewport?: Viewport;
}

interface PlusCode {
  compound_code: string;
  global_code: string;
}

interface Result {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  plus_code?: PlusCode;
  types: string[];
}

interface GeocodingResponse {
  plus_code?: PlusCode;
  results: Result[];
  status: string;
  error_message?: string;
}

export default async function getLocationFromCoordinates({
  latitude,
  longitude,
}: {
  latitude: string | number;
  longitude: string | number;
}): Promise<GeocodingResponse | null> {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;

  try {
    const response = await axios.get<GeocodingResponse>(url);
    const data = response.data;

    if (data.status === "OK") {
      return data;
    } else {
      const errorMessage = data.error_message || data.status || "Unknown error";
      console.error("Geocoding request failed:", errorMessage);
      return null;
    }
  } catch (error: any) {
    console.error("Error fetching geocoding data:", error.message);
    return null;
  }
}
