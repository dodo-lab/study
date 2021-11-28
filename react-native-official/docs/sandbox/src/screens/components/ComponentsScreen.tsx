import React from 'react';
import {LinkList} from 'screens/ui-parts/LinkList';
import {ActivityIndicatorScreen} from './core';

const data = [ActivityIndicatorScreen.name];

const Screen: React.FC = () => {
  return <LinkList data={data} />;
};

export const ComponentsScreen: ScreenProps = {
  name: 'Components',
  component: Screen,
  options: {
    title: 'Components',
  },
};
