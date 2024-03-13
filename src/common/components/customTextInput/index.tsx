import {View, Text, ViewStyle, TextInput} from 'react-native';
import React from 'react';
import {color} from '../../../styleHelper';
import styles from './styles';
import {scaleSize} from '../../utils/scaleSheetUtils';

interface CustomTextInputProps {
  placeHolder?: string;
  inputStyle?: ViewStyle;
  placeholderTextColor?: string | undefined; // Update the type here
  secureTextEntry?: boolean;
  onChangeText?: (_txt: string) => void;
  value?: string;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  numberOfLines?: number;
  isBorderRadious?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeHolder = '',
  inputStyle,
  placeholderTextColor, // Update the type here
  secureTextEntry,
  onChangeText,
  value = '',
  onSubmitEditing,
  onBlur,
  onFocus,
  numberOfLines,
  isBorderRadious,
}): React.ReactElement => {
  return (
    <View>
      <TextInput
        style={[
          styles.input,
          inputStyle,
          {borderRadius: isBorderRadious ? scaleSize(10) : 0},
        ]}
        value={value}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeHolder}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : color.WHITE
        }
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </View>
  );
};

export default CustomTextInput;
