import {
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';

import {color, globalStyle} from '../../styleHelper';
import Logo from '../../common/components/logo';
import CustomTextInput from '../../common/components/customTextInput';
import {scaleSizeWidth} from '../../common/utils/scaleSheetUtils';
import RoundCornerButton from '../../common/components/CustomButton/roundCornerButton';
import {navigate} from '../../common/utils/navigatorUtils';
import {NavScreenTags} from '../../common/constants/navScreenTags';
import {Store} from '../../common/context/store';
import {LOADING_START, LOADING_STOP} from '../../common/context/actions/types';

const Login = () => {
  const globalState = useContext(Store);
  //@ts-ignore
  const {dispatchLoaderAction} = globalState;
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const {email, password} = credentials;

  const handleOnLoginPress = (): void => {
    if (email === null || email === '' || email === undefined) {
      setEmailError(true);
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (reg.test(email) === true) {
        setEmailValidationError(false);
      } else {
        setEmailValidationError(true);
      }
    } else if (password === null || password === '' || password === undefined) {
      setPasswordError(true);
    } else {
      dispatchLoaderAction({
        type: LOADING_START,
      });

      setTimeout(() => {
        dispatchLoaderAction({
          type: LOADING_STOP,
        });
      }, 1000);
    }
  };

  const handleOnChange = (name: string, value: string): void => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <SafeAreaView style={[globalStyle.flex1, {backgroundColor: color.BLACK}]}>
      <View style={[globalStyle.containerCentered]}>
        <Logo />
      </View>
      <View style={[globalStyle.flex2, globalStyle.sectionCentered]}>
        <CustomTextInput
          isBorderRadious
          placeHolder="Enter Email"
          inputStyle={{width: scaleSizeWidth(350)}}
          onChangeText={txt => handleOnChange('email', txt)}
          value={email}
        />
        {emailError && (
          <Text style={{color: color.DANGER}}>Email is required</Text>
        )}
        {emailValidationError && (
          <Text style={{color: color.DANGER}}>Email is not valid</Text>
        )}
        <CustomTextInput
          isBorderRadious
          placeHolder="Enter Password"
          inputStyle={{width: scaleSizeWidth(350)}}
          secureTextEntry={true}
          value={password}
          onChangeText={txt => handleOnChange('password', txt)}
        />
        {passwordError && (
          <Text style={{color: color.DANGER}}>Password is required</Text>
        )}
        <RoundCornerButton title="Login" onPress={handleOnLoginPress} />

        <TouchableOpacity
          style={{gap: 10, flexDirection: 'row'}}
          onPress={() => navigate(NavScreenTags.SIGN_UP_SCREEN)}>
          <Text style={{color: color.WHITE}}>Don't have account?</Text>
          <Text style={{color: color.LIGHT_GREEN, fontWeight: 'bold'}}>
            SingUp
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
