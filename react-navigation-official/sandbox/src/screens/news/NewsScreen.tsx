import {Entypo} from '@expo/vector-icons';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

type Props = BottomTabScreenProps<MainTabParamList, 'News'>;
const Screen: React.FC<Props> = () => {
  useFocusEffect(
    useCallback(() => {
      console.log('focused');
      return () => console.log('unfocused');
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text h1>NewsScreen</Text>
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
