import React, { forwardRef } from 'react';
import { ReturnKeyType, StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle } from 'react-native';
import { HORIZONTAL_DIMENS, colors } from '../constants';

interface Props extends TextInputProps {
	value: string,
	onChangeText: (value: string) => void,
	style?: StyleProp<TextStyle>,
	placeholder: string,
	secureTextEntry?: boolean,
	returnKeyType?: ReturnKeyType,
	blurOnSubmit?: boolean,
	onSubmitEditing?: () => void
};

const Input = forwardRef<TextInput, Props>((props, ref) => {
	const { value, onChangeText, style, placeholder, secureTextEntry, returnKeyType, blurOnSubmit, onSubmitEditing } = props;

	return (
		<TextInput
			ref={ref}
			value={value}
			autoCorrect={false}
			autoCapitalize='none'
			placeholder={placeholder}
			placeholderTextColor={colors.grey}
			style={[styles.input, style]}
			onChangeText={onChangeText}
			secureTextEntry={secureTextEntry}
			returnKeyType={returnKeyType}
			blurOnSubmit={blurOnSubmit}
			onSubmitEditing={onSubmitEditing}
		/>
	);
});

const styles = StyleSheet.create({
	input: {
		width: '70%',
		borderWidth: 1,
		borderRadius: 7,
		color: colors.black,
		borderColor: colors.grey,
		padding: HORIZONTAL_DIMENS._10
	}
});

export { Input };