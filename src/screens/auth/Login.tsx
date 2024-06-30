import React, { useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import { setIsLoggedIn } from '../../redux/features/auth-slice';
import { useAppDispatch } from '../../hooks/common';
import { PrimaryButton, Input } from '../../components';
import { user } from '../../constants';
import styles from './styles';

type RootStackParamList = {
	Register: undefined
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

const Login: React.FC = () => {
	const dispatch = useAppDispatch();
	const passInputRef = useRef<TextInput>(null);
	const navigation = useNavigation<LoginScreenNavigationProp>();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleLogin = () => {
		const validEmail = email.trim();
		const validPassword = password.trim();

		if (!validEmail) {
			Toast.show({
				type: 'error',
				text1: 'Please enter email id.'
			});
			return;
		}
		if (!validPassword) {
			Toast.show({
				type: 'error',
				text1: 'Please enter password.'
			});
			return;
		}
		if (user.email !== validEmail) {
			Toast.show({
				type: 'error',
				text1: 'The user does not exist with this email id.'
			});
			return;
		}
		if (user.password !== validPassword) {
			Toast.show({
				type: 'error',
				text1: 'Please enter correct password.'
			});
			return;
		}

		dispatch(setIsLoggedIn(true));
	};

	const handleNavigation = () => {
		navigation.navigate('Register');
	};

	return (
		<View style={styles.container}>
			<Input
				value={email}
				placeholder='Enter email id: test@example.com'
				onChangeText={setEmail}
				style={styles.marginTop}
				returnKeyType='next'
				blurOnSubmit={false}
				onSubmitEditing={() => passInputRef.current?.focus()}
			/>
			<Input
				ref={passInputRef}
				value={password}
				placeholder='Enter password: test@123'
				onChangeText={setPassword}
				style={styles.marginTop}
				secureTextEntry={true}
			/>

			<PrimaryButton
				title='Login'
				onPress={handleLogin}
			/>

			<View style={styles.createAccount}>
				<Text style={styles.description}>Don't have an account?</Text>
				<TouchableOpacity onPress={handleNavigation} style={styles.createButton}>
					<Text style={styles.createTxt}>Create Account</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;