import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface AppState {
    value: {
        darkMode: boolean,
        sidenavOpen: boolean
    };
    status: 'idle' | 'loading' | 'success' | 'failure';
    error: string;
}

const initialState: AppState = {
    value: {
        darkMode: false,
        sidenavOpen: false
    },
    status: 'idle',
    error: ''
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        openSidenav: (state, action: PayloadAction<boolean>) => {
            state.value.sidenavOpen = action.payload;
        },
        closeSidenav: (state, action: PayloadAction<boolean>) => {
            state.value.sidenavOpen = action.payload;
        },
    }
});

export const { openSidenav, closeSidenav } = appSlice.actions;

export default appSlice.reducer;
