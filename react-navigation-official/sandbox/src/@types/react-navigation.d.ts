import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {DrawerNavigationEventMap} from '@react-navigation/drawer/lib/typescript/src/types';
import {EventMapBase, NavigatorScreenParams, RouteConfig} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {
  DrawerNavigationState,
  NavigationState,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/routers';

// https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  type ScreenInstanceProps<ParamList extends ParamListBase, RouteName extends keyof ParamList> = RouteConfig<
    ParamList,
    RouteName,
    NavigationState<ParamList>,
    NativeStackNavigationOptions,
    EventMapBase
  >;

  type TabInstanceProps<ParamList extends ParamListBase, RouteName extends keyof ParamList> = RouteConfig<
    ParamList,
    RouteName,
    TabNavigationState<ParamList>,
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap
  >;

  type DrawerInstanceProps<ParamList extends ParamListBase, RouteName extends keyof ParamList> = RouteConfig<
    ParamList,
    RouteName,
    DrawerNavigationState<ParamList>,
    DrawerNavigationOptions,
    DrawerNavigationEventMap
  >;

  type RootStackParamList = {
    Top: undefined;
    Home: undefined;
    Details: {userId: string; title?: string} | undefined;
    LogoHeader: undefined;
    PlacingHeaderButton: undefined;
    MainTabNav: NavigatorScreenParams<MainTabParamList> | undefined;
    DrawerNav: NavigatorScreenParams<DrawerParamList> | undefined;
    AuthenticationFlowNav: NavigatorScreenParams<AuthenticationFlowStackParamList> | undefined;
    Modal: {message: string};
  };

  type MainTabParamList = {
    News: undefined;
    Settings: {userId: string};
  };

  type DrawerParamList = {
    DrawerFirst: undefined;
    DrawerSecond: undefined;
  };

  type AuthenticationFlowStackParamList = {
    SignIn: undefined;
    UserHome: undefined;
    UserSettings: undefined;
  };
}
