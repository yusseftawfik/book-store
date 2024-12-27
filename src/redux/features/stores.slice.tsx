import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IStore } from 'src/core/models/store.model';

import { ErrorModel } from '../../core/models/generic.model';
import storesService from '../../services/api/stores.service';

interface StoreState {
    storesLoader: boolean;
    error: ErrorModel | undefined;
    stores: IStore[];
}

const initialState: StoreState = {
    storesLoader: false,
    error: {} as ErrorModel,
    stores: [],
};

export const getAllStoresThunk = createAsyncThunk<IStore[], null, { rejectValue: ErrorModel }>(
    `stores/getAllStores`,
    async (_, { rejectWithValue }: any) => {
        try {
            const response = await storesService.getAllStores();
            return response?.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

const storesSlice = createSlice({
    name: `StoreState`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get All StoreState
        builder.addCase(getAllStoresThunk.fulfilled, (state: any, action: any) => {
            state.storesLoader = false;
            state.stores = action?.payload?.stores;
        });
        builder.addCase(getAllStoresThunk.pending, (state: any) => {
            state.storesLoader = true;
        });
        builder.addCase(getAllStoresThunk.rejected, (state: any, action: any) => {
            state.storesLoader = false;
            state.error = action.payload;
        });
    },
});

export default storesSlice;
export const storesReducer = storesSlice.reducer;
