import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const data = [...Array(20)].map((_, index) => index.toString());

export const FlatListTest: React.FC = () => {
  return <FlatList style={styles.container} data={data} renderItem={({item}) => <Text>{item}</Text>} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 150,
    borderWidth: 1,
  },
});
