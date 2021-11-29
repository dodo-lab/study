import React, {useReducer, useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const [modalVisible, modalVisibleDispatch] = useReducer(value => !value, false);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text h4>Modal View</Text>
            <Button title="hide" onPress={modalVisibleDispatch} />
          </View>
        </View>
      </Modal>

      <Button title="show" onPress={modalVisibleDispatch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 8,
    elevation: 5,
  },
});

export const ModalScreen: ScreenProps = {
  name: 'Modal',
  component: Screen,
  options: {
    title: 'Modal',
  },
};
