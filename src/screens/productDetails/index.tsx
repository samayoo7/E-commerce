import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { setCartList } from '../../redux/features/product-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/common';
import { PrimaryButton } from '../../components';
import styles from './styles';
import { VERTICAL_DIMENS } from '../../constants';
import { Star } from '../../assets/svgs';
import { Product } from '../../types';

type RootStackParamList = {
	Cart: undefined
};

type ProductDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;

const ProductDetails: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<ProductDetailsNavigationProp>();

	const { selectedProduct, cartList } = useAppSelector(state => state.products);

	const isAddedInCart = cartList.some(item => item.id === selectedProduct?.id);

	const handleAddToCart = () => {
		if (!isAddedInCart && selectedProduct) {
			let updatedProduct: Product = { ...selectedProduct, cartQuantity: 1 };
			dispatch(setCartList([...cartList, updatedProduct]));
		}
		navigation.navigate('Cart');
	};

	return (
		<>
			<ScrollView bounces={false} contentContainerStyle={styles.container}>
				<Image
					resizeMode='contain'
					style={styles.image}
					source={{ uri: selectedProduct?.image }}
				/>
				<View style={styles.contentView}>
					<Text style={styles.title}>{selectedProduct?.title}</Text>
					<Text style={styles.price}>{`₹${selectedProduct?.price}`}</Text>

					<View style={styles.ratingView}>
						<View style={[styles.ratingView, styles.starView]}>
							<Star height={VERTICAL_DIMENS._20} width={VERTICAL_DIMENS._20} />
							<Text style={styles.ratingTxt}>{selectedProduct?.rating.rate}</Text>
						</View>
						<Text style={styles.ratingCount}>{`${selectedProduct?.rating.count} ratings`}</Text>
					</View>

					<Text style={styles.description}>{selectedProduct?.description}</Text>
				</View>
			</ScrollView>

			<View style={styles.bottomView}>
				<PrimaryButton
					title={isAddedInCart ? 'Go to Cart' : 'Add to Cart'}
					style={styles.button}
					onPress={handleAddToCart}
				/>
			</View>
		</>
	)
};

export default ProductDetails;