import { configureStore } from '@reduxjs/toolkit';

import { contactsSlice } from 'redux/contacts/contactsSlice';
import { filterSlice } from 'redux/filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
