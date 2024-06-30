import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/Login';
import Register from '../../screens/auth/Register';

const Stack = createNativeStackNavigator();

const AuthStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={{
			headerBackTitleVisible: false
		}}>
			<Stack.Screen
				name='Login'
				component={Login}
			/>
			<Stack.Screen
				name='Register'
				component={Register}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;