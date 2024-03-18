import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Alert} from 'react-native';

// Define a type for the error object returned by Firebase
type FirebaseError = FirebaseAuthTypes.NativeFirebaseAuthError;

// Define a custom function for creating a user with email and password
async function createUserWithEmailAndPassword(
  email: string,
  password: string,
): Promise<void> {
  try {
    // Attempt to create the user with the provided email and password
    await auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created & signed in!');
  } catch (error) {
    // Handle specific error cases
    if ((error as FirebaseError).code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    } else if ((error as FirebaseError).code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    } else {
      // Log any other errors
      console.error(error);
    }
  }
}

export default createUserWithEmailAndPassword;
