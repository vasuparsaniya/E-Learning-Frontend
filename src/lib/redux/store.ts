import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { REACT_APP_NODE_ENV } from '../config';

// 🔹 Persist config for only selected reducers
export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

// 🔹 Combine reducers
const combineReducer = combineReducers({
  auth: authReducer,
});

// 🔹 Wrap root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, combineReducer);

export const store = configureStore({
  reducer: persistedReducer, // ✅ Use persisted reducers
  devTools: REACT_APP_NODE_ENV !== 'Production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ⛔ Suppress redux-persist warnings
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // ✅ Create persistor

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
