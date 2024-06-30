import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import { getProducts } from '../apis/product';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { Product } from '../../types';

interface productsState {
	productList: Array<Product>;
	selectedProduct: Product | null;
	cartList: Array<Product>;
}

const productsInitialState: productsState = {
	productList: [],
	selectedProduct: null,
	cartList: []
};

const productsSlice = createSlice({
	name: 'products',
	initialState: productsInitialState,
	reducers: {
		setSelectedProduct(state, action: PayloadAction<Product>) {
			state.selectedProduct = action.payload;
		},
		setCartList(state, action: PayloadAction<Product[]>) {
			state.cartList = action.payload;
		},
		setCartEmpty(state) {
			state.cartList = [];
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.productList = action.payload;
		});
		builder.addCase(getProducts.rejected, (_, action: PayloadAction<any>) => {
			Toast.show({
				type: 'error',
				text1: action?.payload
			});
		});
	}
});

const persistConfig = {
	key: 'products',
	storage: AsyncStorage,
	whiteList: ['cartList']
};

export const { setSelectedProduct, setCartList, setCartEmpty } = productsSlice.actions;
export default persistReducer(persistConfig, productsSlice.reducer);