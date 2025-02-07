import { Action, combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authorsReducer } from './features/authors.slice';
import { booksReducer } from './features/books.slice';
import { storesReducer } from './features/stores.slice';

// ---------------------------------------------------------------------------------------------------------------------
const persistConfig = {
    key: `root`,
    storage,
};
// ---------------------------------------------------------------------------------------------------------------------
export const combinedReducers: Reducer = combineReducers({
    bookState: booksReducer,
    authorState: authorsReducer,
    storeState: storesReducer,
});
// ---------------------------------------------------------------------------------------------------------------------
export type RootState = ReturnType<typeof combinedReducers>;
// ---------------------------------------------------------------------------------------------------------------------
const rootReducer: Reducer<RootState> = (state: RootState, action: Action) => {
    return combinedReducers(state, action);
};
// ---------------------------------------------------------------------------------------------------------------------
const persistedReducer: Reducer = persistReducer<any, any>(persistConfig, rootReducer);
// ---------------------------------------------------------------------------------------------------------------------
export const setupStore = () =>
    configureStore({
        reducer: persistedReducer,
    });
export const store = setupStore();
export type AppStore = ReturnType<typeof setupStore>;
setupListeners(store.dispatch);
// ---------------------------------------------------------------------------------------------------------------------
export const persistor: Persistor = persistStore(store);
