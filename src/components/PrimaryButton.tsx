import React, { ReactNode } from 'react';
import { ActivityIndicator, Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { HORIZONTAL_DIMENS, VERTICAL_DIMENS, colors } from '../constants';

type Props = {
	style?: StyleProp<ViewStyle>,
	title: string,
	onPress: () => void,
	loading?: boolean,
	left?: ReactNode
}

const PrimaryButton: React.FC<Props> = (props: Props) => {
	const { style, title, onPress, loading = false, left } = props;

	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				{
					opacity: pressed ? 0.5 : 1
				},
				styles.button,
				style
			]}>
			{left && left}
			{loading ?
				<ActivityIndicator
					size={'small'}
					animating={loading}
				/>
				: <Text style={[styles.title, left ? styles.leftMargin : {}]}>{title}</Text>
			}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		borderWidth: 1,
		borderRadius: 8,
		paddingVertical: 7,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: VERTICAL_DIMENS._40,
		paddingHorizontal: HORIZONTAL_DIMENS._40
	},
	title: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.black
	},
	leftMargin: {
		marginLeft: HORIZONTAL_DIMENS._10
	}
});

export { PrimaryButton };