import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts-reducers';
import { contacts } from './api';

const store = configureStore({
  reducer: {
    contactReducer,
    [contacts.reducerPath]: contacts.reducer,
  },
});
export default store;
