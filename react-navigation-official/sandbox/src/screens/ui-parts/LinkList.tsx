import {ParamListBase} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ListItem} from 'react-native-elements';

type Props<T extends ParamListBase> = {
  data: (keyof T)[];
  onPress: (index: number) => void;
};

export const LinkList = <T extends ParamListBase>({data, onPress}: Props<T>) => {
  return (
    <View style={styles.container}>
      <FlatList<keyof T>
        data={data}
        keyExtractor={item => item.toString()}
        renderItem={({item, index}) => (
          <ListItem
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}
            bottomDivider
            onPress={() => onPress(index)}>
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
