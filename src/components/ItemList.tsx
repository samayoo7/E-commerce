import React, { ReactNode } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { setCartList } from '../redux/features/product-slice';
import { useAppDispatch, useAppSelector } from '../hooks/common';
import { HORIZONTAL_DIMENS, VERTICAL_DIMENS, colors } from '../constants';
import { Product } from '../types';

type Props = {
	data: Array<Product>,
	listFooterComponent?: () => React.JSX.Element,
	handleEndReached?: () => void,
	handleNavigation?: (value: Product) => void,
	right?: ReactNode
};

const ItemList: React.FC<Props> = (props: Props) => {
	const { data, listFooterComponent, handleEndReached, handleNavigation, right } = props;

	const dispatch = useAppDispatch();
	const cartList = useAppSelector(state => state.products.cartList);

	const onPress = (item: Product) => {
		handleNavigation && handleNavigation(item);
	};

	const handleCount = (item: any, counter: string) => {
		const updatedCartList = cartList.map((ele) => {
			if (item.id === ele.id) {
				const cartQuantity = counter === 'PLUS' ? (ele.cartQuantity || 0) + 1 : (ele.cartQuantity || 0) - 1;
				return {
					...ele,
					cartQuantity: cartQuantity
				};
			}
			return ele;
		}).filter(e => (e.cartQuantity || 0) > 0);

		dispatch(setCartList(updatedCartList));
	};

	const renderList = ({ item }: { item: Product }) => {
		return (
			<TouchableOpacity onPress={() => onPress(item)} activeOpacity={0.7} style={styles.listView}>
				<Image resizeMode='contain' style={styles.image} source={{ uri: item?.image }} />
				<View style={styles.contentView}>
					<Text numberOfLines={2} style={styles.title}>{item?.title}</Text>
					<Text style={styles.price}>{`₹${(item?.price).toFixed(2)}`}</Text>
				</View>

				{right &&
					<View style={styles.actionView}>
						<TouchableOpacity onPress={() => handleCount(item, 'PLUS')} style={styles.plusButton}>
							<Text style={styles.plusTxt}>+</Text>
						</TouchableOpacity>
						<Text style={styles.quantity}>{item?.cartQuantity}</Text>
						<TouchableOpacity onPress={() => handleCount(item, 'MINUS')} style={styles.plusButton}>
							<Text style={styles.plusTxt}>-</Text>
						</TouchableOpacity>
					</View>
				}
			</TouchableOpacity>
		);
	};

	return (
		<FlatList
			data={data}
			bounces={false}
			renderItem={renderList}
			onEndReached={handleEndReached}
			contentContainerStyle={styles.listContainer}
			ListEmptyComponent={() => <Text style={styles.noDataTxt}>No Data Found</Text>}
			ItemSeparatorComponent={() => <View style={styles.separator} />}
			ListFooterComponent={listFooterComponent}
		/>
	);
};

const styles = StyleSheet.create({
	listView: {
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.white,
		paddingVertical: VERTICAL_DIMENS._13,
		paddingHorizontal: HORIZONTAL_DIMENS._10
	},
	image: {
		borderRadius: 7,
		width: VERTICAL_DIMENS._50,
		height: VERTICAL_DIMENS._50
	},
	contentView: {
		flex: 1,
		marginLeft: HORIZONTAL_DIMENS._10
	},
	title: {
		fontSize: 15,
		fontWeight: '500',
		color: colors.black
	},
	price: {
		fontWeight: '400',
		color: colors.blue,
		marginTop: VERTICAL_DIMENS._10
	},
	actionView: {
		borderRadius: 20,
		alignItems: 'center'
	},
	quantity: {
		fontSize: 15,
		fontWeight: '600',
		color: colors.black,
		textAlign: 'center',
		padding: HORIZONTAL_DIMENS._5
	},
	plusButton: {
		borderRadius: 20,
		alignItems: 'center',
		height: VERTICAL_DIMENS._25,
		width: VERTICAL_DIMENS._25,
		justifyContent: 'center',
		backgroundColor: colors.grey200,
		// paddingVertical: VERTICAL_DIMENS._6,
		// paddingHorizontal: HORIZONTAL_DIMENS._9
	},
	plusTxt: {
		fontSize: 15,
		fontWeight: '500',
		color: colors.black
	},
	listContainer: {
		paddingVertical: VERTICAL_DIMENS._20,
		marginHorizontal: HORIZONTAL_DIMENS._20
	},
	separator: {
		height: VERTICAL_DIMENS._10
	},
	noDataTxt: {
		fontSize: 16,
		fontWeight: '500',
		textAlign: 'center',
		color: colors.grey
	}
});

export { ItemList };