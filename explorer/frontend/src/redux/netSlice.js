import { createSlice } from '@reduxjs/toolkit';

export const netSlice = createSlice({
    name: 'net',
    initialState: {
        net: 'localnet',
    },
    reducers: {
        selectNet(state, action) {
            state.net = action.payload;
        },
    },
});

export const { selectNet } = netSlice.actions;
