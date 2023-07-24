import { Place } from "../../features/places/placesSlice";
import moment from "moment";

export interface CachedPlaces {
    timestamp: number,
    places: Place[]
}

export const LocalStorage = {
    setPlaces(places: Place[]): void {
        localStorage.setItem('places', JSON.stringify({
            timestamp: moment().valueOf(), places: places
        }));
    },
    getPlaces(): CachedPlaces {
        const cachedPlaces = localStorage.getItem('places');
        return cachedPlaces ? JSON.parse(cachedPlaces.toString()) : null;
    }
}
