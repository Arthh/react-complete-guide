import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cash-slice';


const store = configureStore({
  reducer: {
    ui: uiSlice,
    cart: cartSlice
  }
})

export default store;