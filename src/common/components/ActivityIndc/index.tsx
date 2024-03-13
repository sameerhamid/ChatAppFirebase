import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  visible?: boolean;
}

const defaultProps: Props = {
  visible: false,
};
const ActivityIndc = (props: typeof defaultProps): React.ReactElement => {
  return (
    <Modal visible={props.visible} transparent>
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
