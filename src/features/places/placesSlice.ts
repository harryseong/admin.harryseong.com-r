

export interface Years {
    start: number;
    end: number;
}
export interface Coords {
    lat: number;
    lng: number;
}
export interface Place {
    place_id: number;
    order: number;
    displayName: string;
    fullName: string;
    description: string;
    years: Years;
    coords: Coords;
}

export interface PlacesState {
    value: {
        mapbox: {
            style: string,
            lng: number,
            lat: number,
            zoom: number,
            interactive: boolean
        }
        places: Place[],
        selectedPlace: Place | null
    }
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string
}

