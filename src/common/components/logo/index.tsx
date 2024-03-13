import {Text, TextStyle, View, ViewStyle} from 'react-native';
import styles from './styles';

export default (
  //@ts-ignore
  logoStyle?,
  //@ts-ignore
  logoTextStyle?,
) => (
  <View style={[styles.logo, logoStyle]}>
    <Text style={[styles.text, logoTextStyle]}>S</Text>
  </View>
);
