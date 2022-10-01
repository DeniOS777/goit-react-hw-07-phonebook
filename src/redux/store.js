import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { itemsSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
});
