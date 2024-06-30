import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpService } from '../../network';
import { Product, RequestBody } from '../../types';

export const getProducts = createAsyncThunk<Product[], RequestBody>(
	'getProducts',
	async (data: RequestBody, { rejectWithValue }) => {
		try {
			const response = await httpService.get<Product[]>('products', {
				params: data
			});
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);