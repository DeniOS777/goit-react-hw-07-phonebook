import { createSlice, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contactsOperations';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,

    [addContact.fulfilled]: (state, { payload }) => [...state, payload],

    [deleteContact.fulfilled]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload.id),
  },
});

export const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  extraReducers: {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
  },
});

export const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: {
    [fetchContacts.pending]: () => null,
    [fetchContacts.rejected]: (_, { payload }) => payload,

    [addContact.pending]: () => null,
    [addContact.rejected]: (_, { payload }) => payload,

    [deleteContact.pending]: () => null,
    [deleteContact.rejected]: (_, { payload }) => payload,
  },
});

export default combineReducers({
  items: itemsSlice.reducer,
  isLoading: isLoadingSlice.reducer,
  error: errorSlice.reducer,
});

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchContacts.pending]: state => {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchContacts.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [addContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addContact.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [deleteContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [deleteContact.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteContact.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });
