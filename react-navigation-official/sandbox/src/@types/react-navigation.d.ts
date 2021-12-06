import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {EventMapBase, RouteConfig} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {NavigationState, ParamListBase, TabNavigationState} from '@react-navigation/routers';

// https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {}
  }

  type ScreenProps<RouteName extends keyof RootStackParamList> = RouteConfig<
    RootStackParamList,
    RouteName,
    NavigationState,
    NativeStackNavigationOptions,
    EventMapBase
  >;

  type TabScreenProps<RouteName extends keyof RootStackParamList> = RouteConfig<
    RootStackParamList,
    RouteName,
    TabNavigationState,
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap
  >;

  type RootStackParamList = {
    Home: undefined;
    Details: {userId: string; title?: string} | undefined;
    LogoHeader: undefined;
    PlacingHeaderButton: undefined;
    MainTabNav: undefined;
    Settings: undefined;
    News: undefined;
  };
}
