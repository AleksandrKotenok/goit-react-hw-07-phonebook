import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { contactReducer } from '../redux/index'
import {API} from './APIs/api'
export const store configureStore({
   reducer: {
      contactReducer,
      [API.reducerPath]:API.reducer
   },
})
setupListeners(store.dispatch)