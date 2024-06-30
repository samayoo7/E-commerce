import React from 'react';
import { StyleSheet } from 'react-native';
import { BaseToast, BaseToastProps } from 'react-native-toast-message';
import { colors } from '../constants';

export default {
	success: (props: BaseToastProps) => {
		return (
			<BaseToast
				{...props}
				style={styles.toast}
				contentContainerStyle={styles.container}
				text1Style={styles.description}
			/>
		);
	},
	error: (props: BaseToastProps) => {
		return (
			<BaseToast
				{...props}
				style={[styles.toast, styles.errorToast]}
				contentContainerStyle={styles.container}
				text1Style={styles.description}
			/>
		);
	}
};

const styles = StyleSheet.create({
	toast: {
		borderLeftColor: colors.darkGreen,
		borderLeftWidth: 6,
		width: '90%',
		backgroundColor: colors.lightGreen,
		borderRadius: 0,
		bottom: 20
	},
	errorToast: {
		borderLeftColor: colors.danger,
		backgroundColor: colors.dangerLight
	},
	container: {
		paddingHorizontal: 15
	},
	description: {
		color: colors.black,
		fontSize: 16,
		fontWeight: '400'
	}
});