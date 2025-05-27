import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import rootReducer from "./reducers/rootReducer";
// import authReducers from "./reducers/authReducers";

// Redux Persist configuration
const persistConfig = {
  key: "root", // Key for storage
  storage,
  whitelist: ["auth"], // Persist the auth slice
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Persistor for the store
export const persistor = persistStore(store);
export default store;
