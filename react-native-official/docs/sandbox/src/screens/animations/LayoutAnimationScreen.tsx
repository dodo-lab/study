import React, {useState} from 'react';
import {LayoutAnimation, NativeModules, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, ButtonGroup, Text} from 'react-native-elements';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const buttons = ['spring', 'easeInEaseOut', 'linear'] as const;
type ButtonType = typeof buttons[number];

const Screen: React.FC = () => {
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);
  const [type, setType] = useState<ButtonType>('spring');

  const handleButtonPress = (index: number) => {
    setType(buttons[index]);
  };

  const handlePress = () => {
    LayoutAnimation[type]();
    setWidth(width + 30);
    setHeight(height + 30);
  };

  return (
    <View style={styles.container}>
      <ButtonGroup
        selectedIndex={buttons.indexOf(type)}
        buttons={buttons.map(value => value.toString())}
        onPress={handleButtonPress}
      />
      <View style={[styles.box, {width: width, height: height}]} />
      <TouchableOpacity onPress={handlePress}>
        <Button title="Press me!" onPress={handlePress} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    marginBottom: 20,
  },
});

export const LayoutAnimationScreen = {
  name: 'LayoutAnimation',
  component: Screen,
  options: {
    title: 'LayoutAnimation',
  },
};
