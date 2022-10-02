import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contactsOperations';

// export const itemsSlice = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => [payload, ...state],
//       prepare: (name, number) => {
//         const id = nanoid();
//         return {
//           payload: { id, name, number },
//         };
//       },
//     },
//     deleteContact(state, { payload }) {
//       return state.filter(contact => contact.id !== payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = itemsSlice.actions;

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
