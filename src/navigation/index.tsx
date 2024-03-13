import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard, Login, SignUp} from '../container';
import {NavScreenTags} from '../common/constants/navScreenTags';
import React from 'react';
import {navigationRef} from '../common/utils/navigatorUtils';
import {Alert, Button} from 'react-native';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Button
            title="Logout"
            onPress={() =>
              Alert.alert(
                'Logout',
                'Are you sure to logout',
                [
                  {
                    text: 'Yes',
                    onPress: () => console.log('Yes pressed'),
                  },
                  {
                    text: 'No',
                    onPress: () => console.log('No Pressed'),
                    style: 'cancel',
                  },
                ],
                {
                  cancelable: false,
                },
              )
            }
          />
        ),
      }}>
      <Stack.Screen
        name={NavScreenTags.DASHBOARD_SCREEN}
        component={Dashboard}
      />
    </Stack.Navigator>
  );
};

const AuthStack = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NavScreenTags.LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={NavScreenTags.SIGN_UP_SCREEN} component={SignUp} />
      <Stack.Screen name={NavScreenTags.HOME_STACK} component={HomeStack} />
    </Stack.Navigator>
  );
};
const NavContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default NavContainer;
