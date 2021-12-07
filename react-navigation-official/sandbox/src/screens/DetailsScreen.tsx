import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;
const Screen: React.FC<Props> = ({navigation, route}) => {
  if (!route.params?.userId) throw new Error('userId is undefined');
  const userId = route.params.userId;
  const nextUserId = (parseInt(userId, 10) + 1).toString();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const DetailsScreen: ScreenProps<RootStackParamList, 'Details'> = {
  name: 'Details',
  component: Screen,
  initialParams: {userId: '1000', title: 'Details'},
  options: ({route}) => ({title: route.params?.title}),
};
