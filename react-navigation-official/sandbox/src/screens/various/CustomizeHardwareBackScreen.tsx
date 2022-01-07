import {useFocusEffect} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useState} from 'react';
import {BackHandler, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'CustomizeHardwareBack'>;
const Screen: React.FC<Props> = () => {
  const [backPressedCount, setBackPressedCount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const handleBackPress = () => {
        if (backPressedCount <= 0) {
          setBackPressedCount(backPressedCount + 1);
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, [backPressedCount]),
  );

  return (
    <View style={styles.container}>
      <Text h4>Press the hardware back button twice to return to the previous screen.</Text>
      <Text h4 style={{marginTop: 20}}>
        Back pressed count : {backPressedCount}
      </Text>
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

export const CustomizeHardwareBackScreen: ScreenInstanceConfig<RootStackParamList, 'CustomizeHardwareBack'> = {
  name: 'CustomizeHardwareBack',
  component: Screen,
  options: {
    title: 'CustomizeHardwareBack',
  },
};
