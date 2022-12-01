import { configureStore } from '@reduxjs/toolkit'
import cartDataReducer from '../reducer/cartDataSlice'
import userStateSlice from '../reducer/userStateSlice'

export default configureStore({
  reducer: {
    cartData: cartDataReducer,
    userState: userStateSlice,
  },
})