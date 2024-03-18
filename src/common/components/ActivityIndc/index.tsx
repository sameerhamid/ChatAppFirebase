import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';
import styles from './styles';
import {Store} from '../../context/store';

interface Props {
  visible?: boolean;
}

const defaultProps: Props = {
  visible: false,
};
const ActivityIndc = (props: typeof defaultProps): React.ReactElement => {
  const globalState = useContext(Store);
  //@ts-ignore
  const {mapLoaderState} = globalState;
  const {loading} = mapLoaderState;
  console.log(`loading >> ${loading}`);

  return (
    //@ts-ignore
    <Modal visible={loading ? loading : false} transparent>
      <View style={styles.container}>
        <View style={styles.backgroundVw}>
          <View style={styles.mnVw}>
            <ActivityIndicator size="large" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ActivityIndc;
