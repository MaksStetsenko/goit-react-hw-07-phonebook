import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { nanoid } from 'nanoid';

const persistConfig = {
  key: 'contacts',
  storage,
};

const initContacts = { contacts: [] };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initContacts,
  reducers: {
    addContactReducer: {
      reducer({ contacts }, action) {
        contacts.push(action.payload);
      },
      prepare({ name, phone }) {
        return {
          payload: {
            id: nanoid(),
            name,
            phone,
          },
        };
      },
    },

    deleteContactReducer({ contacts }, action) {
      const idx = contacts.findIndex(element => {
        return element.id === action.payload;
      });
      contacts.splice(idx, 1);
    },
  },
});

export const { addContactReducer, deleteContactReducer } =
  contactsSlice.actions;

export const persistedContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
