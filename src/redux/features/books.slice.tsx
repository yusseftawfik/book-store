import { toast } from 'react-toastify';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ErrorModel } from '@/core/models/generic.model';

import booksService from '../../services/api/books.service';

interface Department {
    loading: boolean;
    error: ErrorModel | undefined;
    books: any[];
}

const initialState: Department = {
    loading: false,
    error: {} as ErrorModel,
    books: [],
};

export const getAllDepartmentsThunk = createAsyncThunk<any, null, { rejectValue: ErrorModel }>(
    `department/getIndex`,
    async (_, { rejectWithValue }: any) => {
        try {
            const response = await booksService.getAllBooks();
            return response.data;
            toast.success(`response.data.message`, { autoClose: 5000 });
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

const booksSlice = createSlice({
    name: `department`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get All Departments
        builder.addCase(getAllDepartmentsThunk.fulfilled, (state: any, action: any) => {
            state.loading = false;
            state.department = action.payload;
        });
        builder.addCase(getAllDepartmentsThunk.pending, (state: any) => {
            state.loading = true;
        });
        builder.addCase(getAllDepartmentsThunk.rejected, (state: any, action: any) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default booksSlice;
export const booksReducer = booksSlice.reducer;
