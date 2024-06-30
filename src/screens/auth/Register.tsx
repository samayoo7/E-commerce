import React, { useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { setIsLoggedIn } from '../../redux/features/auth-slice';
import { useAppDispatch } from '../../hooks/common';
import { PrimaryButton, Input } from '../../components';
import { user } from '../../constants';
import styles from './styles';

const Register: React.FC = () => {
	const dispatch = useAppDispatch();
	const passInputRef = useRef<TextInput>(null);

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleRegister = () => {
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
		if (user.email === validEmail) {
			Toast.show({
				type: 'error',
				text1: 'The user is already exists.'
			});
			return;
		}

		dispatch(setIsLoggedIn(true));
	};

	return (
		<View style={styles.container}>
			<Input
				value={email}
				placeholder='Enter your email id'
				onChangeText={setEmail}
				style={styles.marginTop}
				blurOnSubmit={false}
				returnKeyType='next'
				onSubmitEditing={() => passInputRef.current?.focus()}
			/>
			<Input
				ref={passInputRef}
				value={password}
				placeholder='Enter your password'
				onChangeText={setPassword}
				style={styles.marginTop}
				secureTextEntry={true}
			/>

			<PrimaryButton
				title='Register'
				onPress={handleRegister}
			/>
		</View>
	);
};

export default Register;