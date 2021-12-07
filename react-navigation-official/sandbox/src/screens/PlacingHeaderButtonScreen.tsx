import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect, useReducer} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'PlacingHeaderButton'>;
const Screen: React.FC<Props> = ({navigation}) => {
  const [count, countIncrement] = useReducer((value: number) => value + 1, 0);

  // コンポーネントからsetOptionsを使うことで、ヘッダボタンとコンポーネントの連携が可能になる.
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Count up" onPress={countIncrement} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text h4>Count : {count}</Text>
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

export const PlacingHeaderButtonScreen: ScreenProps<RootStackParamList, 'PlacingHeaderButton'> = {
  name: 'PlacingHeaderButton',
  component: Screen,
  options: {
    title: 'PlacingHeaderButton',
  },
};
