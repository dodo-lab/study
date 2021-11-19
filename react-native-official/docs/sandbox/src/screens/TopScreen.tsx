import React from 'react';
import {LinkList} from './ui-parts/LinkList';
import {BasicScreen} from './basic/BasicScreen';
import {TouchablesScreen, GestureResponderScreen} from './various';
import {AnimationsScreen} from './animations';

const data = [BasicScreen.name, TouchablesScreen.name, AnimationsScreen.name, GestureResponderScreen.name];

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
