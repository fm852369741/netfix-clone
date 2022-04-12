import { configureStore } from '@reduxjs/toolkit'
import AppSlice from '../slices/AppSlice'

export default configureStore({
   reducer: {
      app: AppSlice,
   },
})