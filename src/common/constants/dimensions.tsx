import {Dimensions} from 'react-native';
import {isIOS, isTablet} from './platformInfo';

export const screenWidth = Dimensions.get('screen').width;

export const screenHeight = Dimensions.get('screen').height;

export const keyboardHeight = isIOS ? (isTablet ? 60 : 30) : 0;
