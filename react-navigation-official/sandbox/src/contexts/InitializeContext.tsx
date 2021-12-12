import * as Linking from 'expo-linking';
import {createUseContextAndProvider} from 'framework/utils/contextUtils';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const prefix = Linking.createURL('/');
console.log('prefix', prefix);

type InitializeContextParams = {
  firstScreen: keyof RootStackParamList;
};

const whiteList: (keyof RootStackParamList)[] = ['Home', 'MainTabNav', 'Top', 'DrawerNav'];

const [useInitialize, InitializeProvider] = createUseContextAndProvider<InitializeContextParams>();

const WithInitialize: React.FC = ({children}) => {
  const [initializeComplete, setInitializeComplete] = useState(false);
  const [firstScreen, setFirstScreen] = useState<keyof RootStackParamList>('Top');

  useEffect(() => {
    Linking.parseInitialURLAsync()
      .then(parseData => {
        console.log('parseInitialURLAsync', parseData);
        if (parseData.path) {
          if (whiteList.find(value => value.toString() === parseData.path)) {
            // TODO: スクリーン名の直書きや、asを使わないようにしたい...
            setFirstScreen(parseData.path as keyof RootStackParamList);
          }
        }

        setInitializeComplete(true);
      })
      .catch(e => console.error(e));
  }, []);

  const initializeContext: InitializeContextParams = {
    firstScreen,
  };

  if (!initializeComplete) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return <InitializeProvider value={initializeContext}>{children}</InitializeProvider>;
};

export {useInitialize, WithInitialize};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
