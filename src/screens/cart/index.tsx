import React, { useLayoutEffect } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setCartEmpty } from '../../redux/features/product-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/common';
import { ItemList, SummaryCard } from '../../components';
import { VERTICAL_DIMENS } from '../../constants';
import { Delete } from '../../assets/svgs';

const Cart: React.FC = () => {
	const navigation = useNavigation();
	const dispatch = useAppDispatch();

	const cartList = useAppSelector(state => state.products.cartList);

	useLayoutEffect(() => {
		if (cartList.length) {
			navigation.setOptions({
				headerRight: () => <TouchableOpacity onPress={handleDelete}>
					<Delete height={VERTICAL_DIMENS._25} width={VERTICAL_DIMENS._25} />
				</TouchableOpacity>
			});
		}
	}, []);

	const handleDelete = () => {
		Alert.alert('Are you sure you want to remove all items?', '', [
			{ text: 'No' },
			{ text: 'Yes', onPress: () => dispatch(setCartEmpty()) }
		]);
	};

	return (
		<>
			<ItemList
				data={cartList}
				right
			/>
			{cartList.length ?
				<SummaryCard cartList={cartList} />
				: null}
		</>
	);
};

export default Cart;
