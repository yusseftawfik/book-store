import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ErrorModel } from '../../core/models/generic.model';
import authorsService from '../../services/api/authors.service';

interface AuthorsState {
    authorsLoader: boolean;
    error: ErrorModel | undefined;
    authors: any[];
}

const initialState: AuthorsState = {
    authorsLoader: false,
    error: {} as ErrorModel,
    authors: [],
};

export const getAllAuthorsThunk = createAsyncThunk<any, null, { rejectValue: ErrorModel }>(
    `authors/getAllAuthors`,
    async (_, { rejectWithValue }: any) => {
        try {
            const response = await authorsService.getAllAuthors();
            return response?.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

const authorsSlice = createSlice({
    name: `AuthorsState`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get All AuthorsStates
        builder.addCase(getAllAuthorsThunk.fulfilled, (state: any, action: any) => {
            state.authorsLoader = false;
            state.authors = action?.payload?.authors;
        });
        builder.addCase(getAllAuthorsThunk.pending, (state: any) => {
            state.authorsLoader = true;
        });
        builder.addCase(getAllAuthorsThunk.rejected, (state: any, action: any) => {
            state.authorsLoader = false;
            state.error = action.payload;
        });
    },
});

export default authorsSlice;
export const authorsReducer = authorsSlice.reducer;
