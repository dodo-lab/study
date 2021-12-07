import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {EventMapBase, NavigatorScreenParams, RouteConfig} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {NavigationState, ParamListBase, TabNavigationState} from '@react-navigation/routers';

// https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  type ScreenProps<ParamList extends ParamListBase, RouteName extends keyof ParamList> = RouteConfig<
    ParamList,
    RouteName,
    NavigationState,
    NativeStackNavigationOptions,
    EventMapBase
  >;

  type TabScreenProps<ParamList extends ParamListBase, RouteName extends keyof ParamList> = RouteConfig<
    ParamList,
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
    MainTabNav: NavigatorScreenParams<MainTabParamList> | undefined;
  };

  type MainTabParamList = {
    News: undefined;
    Settings: {userId: string};
  };
}
