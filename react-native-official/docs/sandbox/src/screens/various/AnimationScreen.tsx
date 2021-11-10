import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {Button, ButtonGroup, Text} from 'react-native-elements';

const buttons = ['Fade in', 'Fade out'];

const Screen: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fade = (initValue: number, toValue: number) => {
    fadeAnim.setValue(initValue);
    Animated.timing(fadeAnim, {
      toValue,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = (index: number) => {
    // Fade in
    if (index === 0) {
      fade(0, 1);
    }
    // Fade out
    else if (index == 1) {
      fade(1, 0);
    }
  };

  return (
    <View style={styles.container}>
      <ButtonGroup buttons={buttons} onPress={handlePress} />
      <Animated.View style={{opacity: fadeAnim}}>
        <Text h1>Fade</Text>
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
});

export const AnimationScreen = {
  name: 'Animation',
  component: Screen,
  options: {
    title: 'Animation',
  },
};
