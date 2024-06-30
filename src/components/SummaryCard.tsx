import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HORIZONTAL_DIMENS, VERTICAL_DIMENS, colors } from '../constants';
import { Product } from '../types';

type Props = {
	cartList: Array<Product>
};

const SummaryCard: React.FC<Props> = ({ cartList }: Props) => {
	const [deliveryCharge] = useState<number>(50);

	const itemTotal = () => {
		return cartList.reduce((total, item) => total + (item.price * (item.cartQuantity || 0)), 0).toFixed(2);
	};

	return (
		<View style={styles.container}>
			<View style={styles.rowStyle}>
				<Text style={styles.label}>Items Total:</Text>
				<Text style={styles.value}>{`₹${itemTotal()}`}</Text>
			</View>
			<View style={[styles.rowStyle, styles.topMargin]}>
				<Text style={styles.label}>Delivery Charge:</Text>
				<Text style={styles.value}>{`₹${deliveryCharge}`}</Text>
			</View>
			<View style={[styles.rowStyle, styles.totalView]}>
				<Text style={styles.totalLabel}>Total</Text>
				<Text style={styles.totalValue}>{`₹${(Number(itemTotal()) + deliveryCharge).toFixed(2)}`}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		justifyContent: 'center',
		bottom: VERTICAL_DIMENS._20,
		backgroundColor: colors.white,
		padding: HORIZONTAL_DIMENS._20,
		marginTop: VERTICAL_DIMENS._13,
		marginHorizontal: HORIZONTAL_DIMENS._20
	},
	rowStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	label: {
		fontSize: 15,
		fontWeight: '500',
		color: colors.grey
	},
	value: {
		fontSize: 15,
		fontWeight: '600',
		color: colors.grey600
	},
	topMargin: {
		marginTop: VERTICAL_DIMENS._8
	},
	totalView: {
		borderTopWidth: 1,
		borderColor: colors.grey200,
		paddingTop: VERTICAL_DIMENS._10,
		marginTop: VERTICAL_DIMENS._13
	},
	totalLabel: {
		fontSize: 16,
		fontWeight: '600',
		color: colors.black,
	},
	totalValue: {
		fontSize: 18,
		fontWeight: '700',
		color: colors.blue
	}
});

export { SummaryCard };