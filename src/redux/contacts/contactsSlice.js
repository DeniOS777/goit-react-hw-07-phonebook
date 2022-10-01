import { createSlice, nanoid } from '@reduxjs/toolkit';

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
