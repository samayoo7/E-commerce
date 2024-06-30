import { StyleSheet } from 'react-native';
import { HORIZONTAL_DIMENS, VERTICAL_DIMENS, colors } from '../../constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	marginTop: {
		marginTop: VERTICAL_DIMENS._20
	},
	createAccount: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: VERTICAL_DIMENS._50
	},
	description: {
		fontSize: 15,
		fontWeight: '400',
		color: colors.black
	},
	createButton: {
		padding: 1,
		marginLeft: HORIZONTAL_DIMENS._5
	},
	createTxt: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.blue
	}
});

export default styles;