import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from '../../screens/productList';
import ProductDetails from '../../screens/productDetails';
import Cart from '../../screens/cart';

const Stack = createNativeStackNavigator();

const AppStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={{
			headerBackTitleVisible: false
		}}>
			<Stack.Screen
				name='ProductList'
				component={ProductList}
			/>
			<Stack.Screen
				name='ProductDetails'
				component={ProductDetails}
			/>
			<Stack.Screen
				name='Cart'
				component={Cart}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;