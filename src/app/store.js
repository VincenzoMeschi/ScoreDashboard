import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './../features/api/apiSlice'
import authReducer from './../features/auth/authSlice'
import globalSlice from './../features/global/globalSlice'
import userReducer from './../features/user/userSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer,
    global: globalSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMIddlewares) =>
    getDefaultMIddlewares().concat(apiSlice.middleware),
})
