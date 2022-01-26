export const getFilteredContacts = state =>
  state.contactReducer.contacts.filter(({ name }) =>
    name.toLowerCase().includes(state.contactReducer.filter.toLowerCase())
  );
export const getFilter = state => state.contactReducer.filter;
