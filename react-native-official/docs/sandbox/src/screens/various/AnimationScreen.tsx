import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {Button, ButtonGroup, Text} from 'react-native-elements';

const buttons = ['fadeIn', 'fadeOut', 'move'] as const;
type ButtonType = typeof buttons[number];
type ButtonProc = {
  [K in ButtonType]: () => void;
};

const Screen: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const moveXAnim = useRef(new Animated.Value(0)).current;

  const buttonProc: ButtonProc = {
    fadeIn: () => fade(0, 1),
    fadeOut: () => fade(1, 0),
    move: () => move(150),
  };

  const fade = (initValue: number, toValue: number) => {
    fadeAnim.setValue(initValue);
    Animated.timing(fadeAnim, {
      toValue,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const move = (at: number) => {
    moveXAnim.setValue(0);
    Animated.timing(moveXAnim, {
      toValue: at,
      duration: 2000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = (index: number, ...args: any[]) => {
    buttonProc[buttons[index]]();
  };

  return (
    <View style={styles.container}>
      <ButtonGroup buttons={buttons.map(value => value.toString())} onPress={handlePress} />
      <Animated.View style={{opacity: fadeAnim}}>
        <Text h2>Fade</Text>
      </Animated.View>
      <Animated.View style={{...styles.posAnim, transform: [{translateX: moveXAnim}]}}>
        <Text h2>Move</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  posAnim: {
    position: 'absolute',
    top: 0,
  },
});

export const AnimationScreen = {
  name: 'Animation',
  component: Screen,
  options: {
    title: 'Animation',
  },
};
