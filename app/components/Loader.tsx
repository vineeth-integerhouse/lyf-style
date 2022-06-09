import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import {appStateSelectors, useAppState} from '~app/state/AppState';
import {COLOR} from '~app/styles/styleContants';

const Loader: React.FC = () => {
  const actionCount = useAppState(appStateSelectors.actionCount);
  return (
    <Modal visible={actionCount !== 0} transparent animationType="fade">
      <View style={_style.container}>
        <ActivityIndicator animating color={COLOR.PRIMARY} size="large" />
      </View>
    </Modal>
  );
};

export default Loader;

const _style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.OVERLAY,
    opacity: 0.5,
  },
});
