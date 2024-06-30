import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './features/auth-slice.ts';
import productSlice from './features/product-slice.ts';

const reducers = combineReducers({
	auth: authSlice,
	products: productSlice
});

export default reducers;