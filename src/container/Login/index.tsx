import {
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  navigate,
  navigateToAnotherStack,
} from '../../common/utils/navigatorUtils';
import {NavScreenTags} from '../../common/constants/navScreenTags';

const Login = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() =>
          navigateToAnotherStack(
            NavScreenTags.HOME_STACK,
            NavScreenTags.DASHBOARD_SCREEN,
          )
        }>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
