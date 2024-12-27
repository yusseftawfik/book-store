import { toast } from 'react-toastify';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ErrorModel } from '../../core/models/generic.model';
import booksService from '../../services/api/books.service';

interface BooksState {
    loading: boolean;
    error: ErrorModel | undefined;
    books: any[];
}

const initialState: BooksState = {
    loading: false,
    error: {} as ErrorModel,
    books: [],
};

export const getAllBooksThunk = createAsyncThunk<any, null, { rejectValue: ErrorModel }>(
    `Books/getAllBooks`,
    async (_, { rejectWithValue }: any) => {
        try {
            const response = await booksService.getAllBooks();
            toast.success(`response.data.message`, { autoClose: 5000 });
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

const booksSlice = createSlice({
    name: `BooksState`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get All BooksStates
        builder.addCase(getAllBooksThunk.fulfilled, (state: any, action: any) => {
            state.loading = false;
            state.BooksState = action.payload;
        });
        builder.addCase(getAllBooksThunk.pending, (state: any) => {
            state.loading = true;
        });
        builder.addCase(getAllBooksThunk.rejected, (state: any, action: any) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default booksSlice;
export const booksReducer = booksSlice.reducer;
