import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';

const initialState = {
    items: [],
    filter: ''
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addItems(state, action) {
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        },
        deleteItems(state, action) {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            }
        },
        addFilter(state, action) {
            state.filter = action.payload;
        }
    },
})

export const { addItems, deleteItems, addFilter } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
    storage,
  whitelist: ['items'],
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);