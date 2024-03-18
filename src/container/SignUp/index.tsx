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
import signInWithEmailAndPassword from '../../network/login';
import createUserWithEmailAndPassword from '../../network/signup';
import {AddUser} from '../../network';

import auth from '@react-native-firebase/auth';
import LocalStorageUtils, {keys} from '../../asyncSorage';
import {setUniqueValue} from '../../common/constants';
const SignUp = () => {
  const globalState = useContext(Store);
  //@ts-ignore
  const {dispatchLoaderAction} = globalState;
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPassowrdError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassowrd: '',
  });
  const {name, email, password, confirmPassowrd} = credentials;

  const handleSignInPress = (): void => {
    if (name === null || name === '' || name === undefined) {
      setNameError(true);
    } else if (email === null || email === '' || email === undefined) {
      setEmailError(true);
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) === true) {
        setEmailValidationError(false);
      } else {
        setEmailValidationError(true);
      }
    } else if (password === null || password === '' || password === undefined) {
      setPasswordError(true);
    } else if (
      confirmPassowrd === null ||
      confirmPassowrd === '' ||
      confirmPassowrd === undefined
    ) {
      setConfirmPassowrdError(true);
    } else {
      if (password !== confirmPassowrd) {
        Alert.alert('Password does not match');
      } else {
        dispatchLoaderAction({
          type: LOADING_START,
        });

        createUserWithEmailAndPassword(email, password)
          .then(() => {
            let uid = auth().currentUser?.uid;
            let profileImage = '';
            //@ts-ignore
            AddUser(name, email, uid, profileImage)
              .then(() => {
                //@ts-ignore
                LocalStorageUtils.setItem(keys.uuid, uid);
                //@ts-ignore
                setUniqueValue(uid);
                dispatchLoaderAction({
                  type: LOADING_STOP,
                });
                navigate(NavScreenTags.DASHBOARD_SCREEN);
              })
              .catch(error => {
                console.log(`Error create user>> ${JSON.stringify(error)}`);
                dispatchLoaderAction({
                  type: LOADING_STOP,
                });
              });
          })
          .catch(error => {
            console.log(`Error create user>> ${JSON.stringify(error)}`);
            dispatchLoaderAction({
              type: LOADING_STOP,
            });
          });

        setCredentials({
          ...credentials,
          name: '',
          email: '',
          password: '',
          confirmPassowrd: '',
        });
        setEmailError(false);
        setNameError(false);
        setPasswordError(false);
        setConfirmPassowrdError(false);
        setEmailValidationError(false);
      }
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
          placeHolder="Enter Name"
          inputStyle={{width: scaleSizeWidth(350)}}
          onChangeText={txt => handleOnChange('name', txt)}
          value={name}
        />
        {nameError && (
          <Text style={{color: color.DANGER}}>Name is required</Text>
        )}
        <CustomTextInput
          isBorderRadious
          placeHolder="Enter Email"
          inputStyle={{width: scaleSizeWidth(350)}}
          onChangeText={txt => handleOnChange('email', txt)}
          value={email}
        />
        {emailError ? (
          <Text style={{color: color.DANGER}}>Email is required</Text>
        ) : (
          emailValidationError && (
            <Text style={{color: color.DANGER}}>Email is not valid</Text>
          )
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
        <CustomTextInput
          isBorderRadious
          placeHolder="Confirm Password"
          inputStyle={{width: scaleSizeWidth(350)}}
          secureTextEntry={true}
          value={confirmPassowrd}
          onChangeText={txt => handleOnChange('confirmPassowrd', txt)}
        />
        {confirmPasswordError && (
          <Text style={{color: color.DANGER}}>
            Confirm password is required
          </Text>
        )}
        <RoundCornerButton title="Login" onPress={handleSignInPress} />

        <TouchableOpacity
          style={{gap: 10, flexDirection: 'row'}}
          onPress={() => navigate(NavScreenTags.LOGIN_SCREEN)}>
          <Text style={{color: color.WHITE}}>Don't have account?</Text>
          <Text style={{color: color.LIGHT_GREEN, fontWeight: 'bold'}}>
            SingUp
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
