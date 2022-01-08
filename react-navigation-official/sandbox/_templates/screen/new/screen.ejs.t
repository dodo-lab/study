---
to: src/screens/<%= fileName %>.tsx
force: true
---
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

type Props = NativeStackScreenProps<<%= paramList %>, '<%= screenName %>'>;
const Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text h1><%= fileName %></Text>
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

export const <%= fileName %>: <%= navigationParam.config %><<%= paramList %>, '<%= screenName %>'> = {
  name: '<%= screenName %>',
  component: Screen,
  options: {
    title: '<%= screenName %>',
  },
};
