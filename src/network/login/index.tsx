import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Alert} from 'react-native';

// Define a type for the error object returned by Firebase
type FirebaseError = FirebaseAuthTypes.NativeFirebaseAuthError;

// Define a custom function for signing in a user with email and password
async function signInWithEmailAndPassword(
  email: string,
  password: string,
): Promise<void> {
  try {
    // Attempt to sign in the user with the provided email and password
    await auth().signInWithEmailAndPassword(email, password);
    console.log('User signed in successfully!');
  } catch (error) {
    // Handle specific error cases
    if (
      (error as FirebaseError).code === 'auth/user-not-found' ||
      (error as FirebaseError).code === 'auth/wrong-password'
    ) {
      Alert.alert('Invalid email or password!');
    } else if ((error as FirebaseError).code === 'auth/invalid-email') {
      Alert.alert('Invalid email address!');
    } else {
      // Log any other errors
      console.error(error);
    }
  }
}

export default signInWithEmailAndPassword;
