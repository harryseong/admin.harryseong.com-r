import { useDispatch, useSelector } from "react-redux";
import { Place, fetchPlacesThunk, selectPlace, setPlaces } from "./placesSlice";
import { RootState } from "../../app/store";
import { useEffect } from "react";
import { CachedPlaces, LocalStorage } from "../../common/utils/localStorage";
import moment from "moment";

export function Places() {
    const dispatch: any = useDispatch();

    const placesState = useSelector((state: RootState) => state.places);
    const places: Place[] = useSelector((state: RootState) => state.places).value.places;

    useEffect(() => {
        if (placesState.status === 'idle') {
            const cachedPlaces: CachedPlaces = LocalStorage.getPlaces();

            if (!cachedPlaces) {
                console.log('No cached places. Fetching places via places API.');
                dispatch(fetchPlacesThunk());
            } else {
                const placesTtl = 1209600000 // TTL 14 Days
                const cachedTimestamp: number = cachedPlaces.timestamp;
                const currentTimestamp: number = moment().valueOf();

                if (currentTimestamp - cachedTimestamp > placesTtl) {
                    dispatch(fetchPlacesThunk());
                    console.log('Cached places TTL exceeded. Fetching places.')
                } else {
                    dispatch(setPlaces(cachedPlaces.places));
                    console.log('Places fetched from cache.');
                }
            }
        }

        return () => {

        };

    }, [placesState, places, dispatch]);

    return (
        <h1>THIS IS PLACES</h1>
    );
}
