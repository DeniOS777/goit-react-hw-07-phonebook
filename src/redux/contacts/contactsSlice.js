import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => [payload, ...state],
      prepare: (name, number) => {
        const id = nanoid();
        return {
          payload: { id, name, number },
        };
      },
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = itemsSlice.actions;

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
  },
});
