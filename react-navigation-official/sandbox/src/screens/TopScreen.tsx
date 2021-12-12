import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {LinkList} from './ui-parts/LinkList';

const data: (keyof RootStackParamList)[] = [
  'Home',
  'LogoHeader',
  'PlacingHeaderButton',
  'MainTabNav',
  'DrawerNav',
  'AuthenticationFlowNav',
  'CustomizeHardwareBack',
];

type Props = NativeStackScreenProps<RootStackParamList, 'Top'>;
const Screen: React.FC<Props> = ({navigation}) => {
  return <LinkList<RootStackParamList> data={data} onPress={index => navigation.navigate(data[index])} />;
};

export const TopScreen: ScreenInstanceProps<RootStackParamList, 'Top'> = {
  name: 'Top',
  component: Screen,
  options: {
    title: 'Top',
  },
};
