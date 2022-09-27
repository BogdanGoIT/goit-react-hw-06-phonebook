import {  configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    filter: ''
}

const myValueSlice = createSlice({
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

export const { addItems, deleteItems, addFilter } = myValueSlice.actions;

// export const addItems = createAction('contact/addItems');
// export const deleteItems = createAction('contact/deleteItems');

// console.log(addItems.toString())

// const myReducer = createReducer(initialState, {
//     [addItems]: (state, action) => {
//         return {
//             ...state,
//             items: [...state.items, action.payload],
//         }
//     },
//     [deleteItems]: (state, action) => {
//         return {
//             ...state,
//             items: state.items.filter(item => item.id !== action.payload),
//         }
//     }
// });

export const store = configureStore({
    reducer: {
      contacts: myValueSlice.reducer,
  }
});


// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducers";


// // Создаем расширение стора чтобы добавить инструменты разработчика
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

