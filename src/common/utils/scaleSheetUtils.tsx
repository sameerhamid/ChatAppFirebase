import {PixelRatio} from 'react-native';
import {screenHeight, screenWidth} from '../constants/dimensions';
import {isIOS, isTablet} from '../constants/platformInfo';

const baseWidth = isTablet ? 662 : 375;
const baseHeight = isTablet ? 970 : 667;

export const scaleSize = (size: number): number => {
  const scaledWidth = (screenWidth / baseWidth) * size;
  return scaledWidth < 1 ? scaledWidth : Math.round(scaledWidth);
};

export const scaleSizeWidth = (size: number): number =>
  Math.round((screenWidth / baseWidth) * size);

export const scaleSizeHeight = (size: number): number =>
  Math.round((screenHeight / baseHeight) * size);

export const scaleFontSize = (size: number): number => {
  const scale = screenWidth / baseWidth;
  const newSize = size * scale;
  if (isIOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
