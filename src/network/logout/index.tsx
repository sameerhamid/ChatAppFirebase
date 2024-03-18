import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

// Define a custom function for signing out the current user
async function signOut(): Promise<void> {
  try {
    // Attempt to sign out the current user
    await auth().signOut();
    Alert.alert('User signed out successfully!');
  } catch (error) {
    // Log any errors that occur during sign out
    console.error('Error signing out:', error);
    throw error; // Re-throw the error to handle it in the caller function if needed
  }
}

export default signOut;
