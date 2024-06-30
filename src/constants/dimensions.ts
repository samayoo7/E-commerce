import { Dimensions } from 'react-native';

export const _DEVICE_WIDTH = Dimensions.get('window').width;
export const _DEVICE_HEIGHT = Dimensions.get('window').height;

export const _iPHONE_10 = 375;
export const _iPHONE_10_HEIGHT = 812;

export const HORIZONTAL_DIMENS = {
	_2: (_DEVICE_WIDTH * 2) / _iPHONE_10,
	_3: (_DEVICE_WIDTH * 3) / _iPHONE_10,
	_4: (_DEVICE_WIDTH * 4) / _iPHONE_10,
	_5: (_DEVICE_WIDTH * 5) / _iPHONE_10,
	_6: (_DEVICE_WIDTH * 6) / _iPHONE_10,
	_7: (_DEVICE_WIDTH * 7) / _iPHONE_10,
	_8: (_DEVICE_WIDTH * 8) / _iPHONE_10,
	_9: (_DEVICE_WIDTH * 9) / _iPHONE_10,
	_10: (_DEVICE_WIDTH * 10) / _iPHONE_10,
	_13: (_DEVICE_WIDTH * 13) / _iPHONE_10,
	_15: (_DEVICE_WIDTH * 15) / _iPHONE_10,
	_20: (_DEVICE_WIDTH * 20) / _iPHONE_10,
	_40: (_DEVICE_WIDTH * 40) / _iPHONE_10
};

export const VERTICAL_DIMENS = {
	_1: (_DEVICE_HEIGHT * 1) / _iPHONE_10_HEIGHT,
	_2: (_DEVICE_HEIGHT * 2) / _iPHONE_10_HEIGHT,
	_3: (_DEVICE_HEIGHT * 3) / _iPHONE_10_HEIGHT,
	_4: (_DEVICE_HEIGHT * 4) / _iPHONE_10_HEIGHT,
	_5: (_DEVICE_HEIGHT * 5) / _iPHONE_10_HEIGHT,
	_6: (_DEVICE_HEIGHT * 6) / _iPHONE_10_HEIGHT,
	_7: (_DEVICE_HEIGHT * 7) / _iPHONE_10_HEIGHT,
	_8: (_DEVICE_HEIGHT * 8) / _iPHONE_10_HEIGHT,
	_10: (_DEVICE_HEIGHT * 10) / _iPHONE_10_HEIGHT,
	_13: (_DEVICE_HEIGHT * 13) / _iPHONE_10_HEIGHT,
	_20: (_DEVICE_HEIGHT * 20) / _iPHONE_10_HEIGHT,
	_25: (_DEVICE_HEIGHT * 25) / _iPHONE_10_HEIGHT,
	_30: (_DEVICE_HEIGHT * 30) / _iPHONE_10_HEIGHT,
	_40: (_DEVICE_HEIGHT * 40) / _iPHONE_10_HEIGHT,
	_50: (_DEVICE_HEIGHT * 50) / _iPHONE_10_HEIGHT
};