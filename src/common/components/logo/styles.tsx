import {StyleSheet} from 'react-native';
import {smallDeviceHeight} from '../../constants';
import {appStyle, color} from '../../../styleHelper';

const getDimensions = () => {
  if (appStyle.deviceHeight > smallDeviceHeight) {
    return {
      height: 150,
      width: 150,
      borderRadius: 50,
      logoFontSize: 90,
    };
  } else {
    return {
      height: 120,
      width: 120,
      borderRadius: 40,
      logoFontSize: 70,
    };
  }
};

export default StyleSheet.create({
  logo: {
    height: getDimensions().height,
    width: getDimensions().width,
    borderRadius: getDimensions().borderRadius,
    backgroundColor: color.DARK_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: getDimensions().logoFontSize,
    fontWeight: 'bold',
    color: color.WHITE,
  },
});
