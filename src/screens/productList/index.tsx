import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { getProducts } from '../../redux/apis/product';
import { setLogout } from '../../redux/features/auth-slice';
import { setSelectedProduct } from '../../redux/features/product-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/common';
import { ItemList } from '../../components';
import { Product, RequestBody } from '../../types';
import styles from './styles';
import { VERTICAL_DIMENS } from '../../constants';
import { Logout } from '../../assets/svgs';

type RootStackParamList = {
	ProductDetails: undefined
};

type ProductListNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetails'>;

const ProductList: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<ProductListNavigationProp>();

	const [limit, setLimit] = useState<number>(10);
	const [loading, setLoading] = useState<boolean>(false);

	const productList = useAppSelector(state => state.products.productList);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => <TouchableOpacity onPress={handleLogout}>
				<Logout height={VERTICAL_DIMENS._25} width={VERTICAL_DIMENS._25} />
			</TouchableOpacity>
		});
	}, []);

	useEffect(() => {
		getProductsList();
	}, [dispatch, limit]);

	const handleLogout = () => {
		Alert.alert('Are you sure you want to logout?', '', [
			{ text: 'No' },
			{ text: 'Yes', onPress: () => dispatch(setLogout()) }
		]);
	}

	const getProductsList = async () => {
		const requestBody: RequestBody = {
			limit: limit
		};
		const response: any = await dispatch(getProducts(requestBody));
		if (!response.error) {
			if (loading) setLoading(false);
		}
	};

	const handleEndReached = () => {
		setLoading(true);
		setLimit(limit + 10);
	};

	const handleNavigation = (item: Product) => {
		dispatch(setSelectedProduct(item));
		navigation.navigate('ProductDetails');
	};

	const renderFooter = () => {
		return <ActivityIndicator animating={loading} size={'small'} style={styles.loader} />;
	};

	return (
		<ItemList
			data={productList}
			handleNavigation={handleNavigation}
			handleEndReached={handleEndReached}
			listFooterComponent={renderFooter}
		/>
	);
};

export default ProductList;