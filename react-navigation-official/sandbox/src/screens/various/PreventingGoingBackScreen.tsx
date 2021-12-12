import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useInput} from 'hooks/useInput';
import React, {useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'PreventingGoingBack'>;
const Screen: React.FC<Props> = ({navigation}) => {
  const [text, textProps] = useInput('');
  const hasUnsavedChanges = Boolean(text);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      if (!hasUnsavedChanges) return;

      e.preventDefault();

      Alert.alert('確認', '編集内容を破棄して、戻りますか？', [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => navigation.dispatch(e.data.action),
        },
      ]);
    });

    return unsubscribe;
  }, [navigation, hasUnsavedChanges]);

  return (
    <View style={styles.container}>
      <Input {...textProps} placeholder="Edit" />
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

export const PreventingGoingBackScreen: ScreenInstanceProps<RootStackParamList, 'PreventingGoingBack'> = {
  name: 'PreventingGoingBack',
  component: Screen,
  options: {
    title: 'PreventingGoingBack',
    headerBackVisible: false,
  },
};
