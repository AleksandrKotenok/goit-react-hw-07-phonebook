import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filCont, addCont, delCont } from './contacts-actions';

export const initialStore = {
  contacts: {
    items: [
      { id: 1, name: 'kolya', number: 45454353 },
      { id: 2, name: 'moly', number: 953332253 },
      { id: 3, name: 'boba', number: 2378426453 },
      { id: 4, name: 'dodo', number: 12345988 },
      { id: 5, name: 'botik', number: 4535657868 },
      { id: 6, name: 'rik', number: 56767878789 },
      { id: 7, name: 'foper', number: 987332253 },
      { id: 8, name: 'xedos', number: 76752253 },
    ],
    filter: '',
  },
};
// Reducer
const contacts = createReducer(initialStore.contacts.items, {
  [addCont]: (state, { payload }) => [payload, ...state],
  [delCont]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
const filter = createReducer(initialStore.contacts.filter, {
  [filCont]: (state, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
