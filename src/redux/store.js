import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { itemsSlice } from './contacts/itemsSlice';
import { filterSlice } from './contacts/filterSlice';

const persistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter'],
};

const contactsSlice = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsSlice),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
