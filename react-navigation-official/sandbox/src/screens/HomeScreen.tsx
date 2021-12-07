import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Screen: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => console.log('focus'));
    return subscribe;
  }, [navigation]);

  useEffect(() => {
    const subscribe = navigation.addListener('blur', () => console.log('blur'));
    return subscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text h1>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {userId: '1001', title: 'My details'})}
      />
      <Button title="Go to Logo Header" onPress={() => navigation.navigate('LogoHeader')} />
      <Button title="Go to PlacingHeaderButton" onPress={() => navigation.navigate('PlacingHeaderButton')} />
      <Button title="Go to MainTabNav" onPress={() => navigation.navigate('MainTabNav')} />
      <Button
        title="Go to MainTabNav(Settings)"
        onPress={() => navigation.navigate('MainTabNav', {screen: 'Settings', params: {userId: 'test-user'}})}
      />
      <Button title="Update title" onPress={() => navigation.setOptions({title: 'Update!!'})} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export const HomeScreen: ScreenProps<RootStackParamList, 'Home'> = {
  name: 'Home',
  component: Screen,
  options: {
    title: 'My home',
    headerStyle: {backgroundColor: '#f4511e'},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold'},
    headerRight: () => <Button onPress={() => alert('Header button')} title="Info" />,
  },
};
