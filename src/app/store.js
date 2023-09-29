import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { setupListeners } from '@reduxjs/toolkit/query'
import { microserviceApi } from '../services/microserviceApi'
import { persistStore, persistReducer } from 'redux-persist'
// import { authAPI } from 'api/authApi'
// import { certificateSlice } from 'slices/certificateSlice'
// import { notificationSlice } from 'slices/notificationSlice'
// import { writeAPI } from "../api/writeApi";
// import { verificationSlice } from 'slices/verificationSlice'
// import { tokenOTPslice } from 'slices/tokenOTPslice'
// import { writeSlice } from "../slices/writeSlice";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
//   whitelist: ['login'],
//   blacklist: [authAPI.reducerPath,writeAPI.reducerPath]
}

const appReducer = combineReducers({
//   certificates: certificateSlice.reducer,
//   notification: notificationSlice.reducer,
//   verification: verificationSlice.reducer,
//   tokenOTP: tokenOTPslice.reducer,
//   write: writeSlice.reducer,
//   [authAPI.reducerPath]: authAPI.reducer,
//   [writeAPI.reducerPath]: writeAPI.reducer,
  [microserviceApi.reducerPath]: microserviceApi.reducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'login/logout') {
    storage.removeItem('persist:root')
    state = {}
  }
  return appReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(
    //   authAPI.middleware,
    //   writeAPI.middleware,
      microserviceApi.middleware,
    )
})

export default store
export const persistor = persistStore(store)

setupListeners(store.dispatch)