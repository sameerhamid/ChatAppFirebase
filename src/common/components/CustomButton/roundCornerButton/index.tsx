import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface CustomButtonProps {
  title: string;
  btnStyle?: StyleProp<ViewStyle>;
  btnTextStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}
// export default (
//   //@ts-ignore
//   {title, btnStyle, btnTextStyle, onPress},
// ) => (
//   <TouchableOpacity style={[styles.btn, btnStyle]} onPress={onPress}>
//     <Text style={[styles.text, btnTextStyle]}>{title}</Text>
//   </TouchableOpacity>
// );

const CustomButton: React.FC<CustomButtonProps & TouchableOpacityProps> = ({
  title,
  btnStyle,
  btnTextStyle,
  onPress,
  ...props
}) => (
  <TouchableOpacity style={[styles.btn, btnStyle]} onPress={onPress} {...props}>
    <Text style={[styles.text, btnTextStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
