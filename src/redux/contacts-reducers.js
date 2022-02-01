import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filCont } from './contacts-actions';

export const initialStore = {
  contacts: {
    filter: '',
  },
};
// Reducer

const filter = createReducer(initialStore.contacts.filter, {
  [filCont]: (_state, { payload }) => payload,
});

export default combineReducers({
  filter,
});
