import AsyncStorage from '@react-native-async-storage/async-storage';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

interface authState {
	isLoggedIn: boolean
}

const authInitialState: authState = {
	isLoggedIn: false
};

const authSlice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	reducers: {
		setIsLoggedIn(state, action: PayloadAction<boolean>) {
			state.isLoggedIn = action.payload;
		},
		setLogout(state) {
			state.isLoggedIn = false;
		}
	}
});

const persistConfig = {
	key: 'auth',
	storage: AsyncStorage,
	whiteList: ['isLoggedIn']
};

export const { setIsLoggedIn, setLogout } = authSlice.actions;
export default persistReducer(persistConfig, authSlice.reducer);