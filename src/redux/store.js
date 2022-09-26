import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    filter: ''
}

export const addItems = createAction('contact/addItems');
export const deleteItems = createAction('contact/deleteItems')

console.log(addItems.toString())

const myReducer = createReducer(initialState, {
    [addItems]: (state, action) => {
        return {
            ...state,
            items: [...state.items, action.payload],
        }
    },
    [deleteItems]: (state, action) => {
        return state.items.filter(item => item.id !== action.payload);
    }
});

export const store = configureStore({
    reducer: {
      contacts: myReducer
  }
});


// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducers";


// // Создаем расширение стора чтобы добавить инструменты разработчика
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

