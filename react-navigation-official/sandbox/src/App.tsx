import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text h1>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {userId: '1001', title: 'My details'})}
      />
      <Button title="Update title" onPress={() => navigation.setOptions({title: 'Update!!'})} />
    </View>
  );
};

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
const DetailsScreen: React.FC<DetailsProps> = ({route, navigation}) => {
  if (!route.params?.userId) throw new Error('userId is undefined');
  const userId = route.params.userId;
  const nextUserId = (parseInt(userId) + 1).toString();

  return (
    <View style={styles.container}>
      <Text h1>Details Screen</Text>
      <Text>{userId}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Pop to top" onPress={() => navigation.popToTop()} />
      <Button
        title="push Details"
        onPress={() => navigation.push('Details', {userId: nextUserId, title: route.params?.title})}
      />
      <Button title="push Details(none)" onPress={() => navigation.push('Details')} />
    </View>
  );
};

type RootStackParamList = {
  Home: undefined;
  Details: {userId: string; title?: string} | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'My home'}} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{userId: '1000', title: 'Details'}}
          options={({route}) => ({title: route.params?.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
