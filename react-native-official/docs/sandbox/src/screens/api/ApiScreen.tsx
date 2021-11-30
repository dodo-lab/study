import React from 'react';
import {StyleSheet} from 'react-native';
import {LinkList} from 'screens/ui-parts';
import {AppStateScreen} from './apis';

const data = [AppStateScreen.name];

const Screen: React.FC = () => {
  return <LinkList data={data} />;
};

export const ApiScreen: ScreenProps = {
  name: 'Api',
  component: Screen,
  options: {
    title: 'Api',
  },
};
