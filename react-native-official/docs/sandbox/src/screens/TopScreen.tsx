import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {BasicScreen} from './basic/BasicScreen';
import {TouchablesScreen} from './various';

const data = [BasicScreen.name, TouchablesScreen.name];

const LinkListItem = ({item}: {item: string}) => {
  const navigation = useNavigation();

  return (
    <ListItem
      hasTVPreferredFocus={undefined}
      tvParallaxProperties={undefined}
      bottomDivider
      onPress={() => navigation.navigate(item)}>
      <ListItem.Content>
        <ListItem.Title>{item}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

const Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={({item}) => <LinkListItem item={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const TopScreen = {
  name: 'Top',
  component: Screen,
  options: {
    title: 'Top',
  },
};
