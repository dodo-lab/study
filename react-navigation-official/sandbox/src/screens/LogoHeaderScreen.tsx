import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'LogoHeader'>;
const Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text h1>LogoHeaderScreen</Text>
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

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const LogoTitle: React.FC = () => {
  return <Image style={{width: 40, height: 40}} source={logo} />;
};

export const LogoHeaderScreen: ScreenInstanceProps<RootStackParamList, 'LogoHeader'> = {
  name: 'LogoHeader',
  component: Screen,
  options: {
    title: 'LogoHeader',
    headerTitle: () => <LogoTitle />,
  },
};
