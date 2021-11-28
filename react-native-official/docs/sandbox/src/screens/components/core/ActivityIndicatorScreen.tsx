import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Input, Text, Switch} from 'react-native-elements';

const Screen: React.FC = () => {
  const [animation, setAnimation] = useState(true);
  const [size, setSize] = useState(50);

  return (
    <View style={styles.container}>
      <View style={styles.settings}>
        <View style={styles.horizon}>
          <Text>Animation</Text>
          <Switch value={animation} onValueChange={() => setAnimation(!animation)} />
        </View>
        <Input
          label="Size"
          value={size.toString()}
          keyboardType="numeric"
          onChangeText={value => setSize(parseInt(value))}
        />
      </View>
      <View style={styles.horizon}>
        <ActivityIndicator size="small" />
        <ActivityIndicator size="large" />
        <ActivityIndicator size={size} />
        <ActivityIndicator size="large" animating={animation} />
        <ActivityIndicator size="large" color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  settings: {
    width: '100%',
  },
  horizon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export const ActivityIndicatorScreen: ScreenProps = {
  name: 'ActivityIndicator',
  component: Screen,
  options: {
    title: 'ActivityIndicator',
  },
};
