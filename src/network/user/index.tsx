import {firebase} from '@react-native-firebase/database';

export const AddUser = async (
  name: string,
  email: string,
  uid: string,
  profileImage: string,
) => {
  try {
    return firebase
      .app()
      .database('https://mychat-e4213-default-rtdb.firebaseio.com/')
      .ref('users/' + uid)
      .set({
        name: name,
        email: email,
        uid: uid,
        profileImage: profileImage,
      });
  } catch (error) {
    return error;
  }
};
