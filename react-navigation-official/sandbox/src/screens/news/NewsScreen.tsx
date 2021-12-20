import {Entypo} from '@expo/vector-icons';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, useFocusEffect} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'News'>,
  NativeStackScreenProps<RootStackParamList>
>;

const Screen: React.FC<Props> = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      console.log('focused');
      return () => console.log('unfocused');
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text h1>NewsScreen</Text>
      <Button title="Go to Top" onPress={() => navigation.navigate('Top')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings', {userId: 'news'})} />
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

export const NewsScreen: TabInstanceProps<MainTabParamList, 'News'> = {
  name: 'News',
  component: Screen,
  options: {
    title: 'News',
    tabBarIcon: ({color}) => <Entypo name="news" size={24} color={color} />,
    tabBarBadge: 5,
    tabBarBadgeStyle: {
      backgroundColor: 'green',
    },
  },
};
