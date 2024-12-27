import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ErrorModel } from '../../core/models/generic.model';
import booksService from '../../services/api/books.service';

interface BooksState {
    booksLoader: boolean;
    error: ErrorModel | undefined;
    books: any[];
}

const initialState: BooksState = {
    booksLoader: false,
    error: {} as ErrorModel,
    books: [],
};

export const getAllBooksThunk = createAsyncThunk<any, null, { rejectValue: ErrorModel }>(
    `books/getAllBooks`,
    async (_, { rejectWithValue }: any) => {
        try {
            const response = await booksService.getAllBooks();
            return response?.data;
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
            state.booksLoader = false;
            state.books = action?.payload?.books;
        });
        builder.addCase(getAllBooksThunk.pending, (state: any) => {
            state.booksLoader = true;
        });
        builder.addCase(getAllBooksThunk.rejected, (state: any, action: any) => {
            state.booksLoader = false;
            state.error = action.payload;
        });
    },
});

export default booksSlice;
export const booksReducer = booksSlice.reducer;
