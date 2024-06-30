import { StyleSheet } from 'react-native';
import { HORIZONTAL_DIMENS, VERTICAL_DIMENS, _DEVICE_HEIGHT, _DEVICE_WIDTH, colors } from '../../constants';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: colors.white,
		paddingVertical: VERTICAL_DIMENS._20,
		paddingHorizontal: HORIZONTAL_DIMENS._15
	},
	image: {
		height: _DEVICE_HEIGHT / 2.5,
		backgroundColor: colors.white
	},
	contentView: {
		paddingTop: VERTICAL_DIMENS._30
	},
	title: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.black
	},
	price: {
		fontSize: 30,
		fontWeight: 'bold',
		color: colors.black,
		marginTop: VERTICAL_DIMENS._10
	},
	ratingView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: VERTICAL_DIMENS._5
	},
	starView: {
		marginTop: 0,
		borderRadius: 7,
		padding: HORIZONTAL_DIMENS._5,
		backgroundColor: colors.lightGrey
	},
	ratingTxt: {
		fontSize: 14,
		fontWeight: '400',
		color: colors.black,
		marginLeft: HORIZONTAL_DIMENS._4
	},
	ratingCount: {
		fontSize: 15,
		fontWeight: '500',
		color: colors.blue,
		marginLeft: HORIZONTAL_DIMENS._7
	},
	description: {
		fontSize: 15,
		color: colors.black,
		textAlign: 'justify',
		marginTop: VERTICAL_DIMENS._20
	},
	bottomView: {
		backgroundColor: colors.white
	},
	button: {
		marginTop: 0,
		borderWidth: 0,
		backgroundColor: '#ffa534',
		marginBottom: VERTICAL_DIMENS._25,
		paddingVertical: VERTICAL_DIMENS._13,
		marginHorizontal: HORIZONTAL_DIMENS._15
	}
});

export default styles;