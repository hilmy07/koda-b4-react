// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default: localStorage
import { combineReducers } from "redux";
import cartReducer from "./reducers/chart";
import reducers from "./reducers";

// Konfigurasi persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// Gabungkan semua reducer
// const rootReducer = combineReducers({
//  cart: cartReducer,
// });

const persistedReducer = persistReducer(persistConfig, reducers);

// Buat store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Buat persistor
export const persistor = persistStore(store);
