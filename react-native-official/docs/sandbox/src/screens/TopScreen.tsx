import React from 'react';
import {LinkList} from './ui-parts/LinkList';
import {BasicScreen} from './basic/BasicScreen';
import {
  TouchablesScreen,
  GestureResponderScreen,
  HermesConfirmScreen,
  NativeModuleScreen,
  NativeUIScreen,
} from './various';
import {AnimationsScreen} from './animations';
import {ComponentsScreen} from './components';
import {ApiScreen} from './api';

const data = [
  BasicScreen.name,
  TouchablesScreen.name,
  AnimationsScreen.name,
  GestureResponderScreen.name,
  HermesConfirmScreen.name,
  NativeModuleScreen.name,
  NativeUIScreen.name,
  ComponentsScreen.name,
  ApiScreen.name,
];

const Screen: React.FC = () => {
  return <LinkList data={data} />;
};

export const TopScreen = {
  name: 'Top',
  component: Screen,
  options: {
    title: 'Top',
  },
};
