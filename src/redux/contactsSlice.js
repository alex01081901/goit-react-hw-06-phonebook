import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const duplicatedContact = state.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );

        if (duplicatedContact) {
          return alert(`${duplicatedContact.name} is already in contacts`);
        }
        return [action.payload, ...state];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;