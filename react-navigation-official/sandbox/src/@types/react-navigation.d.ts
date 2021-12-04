import {EventMapBase, RouteConfig} from '@react-navigation/core';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {NavigationState, ParamListBase} from '@react-navigation/routers';

// https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {}
  }

  type ScreenProps = RouteConfig<
    ParamListBase,
    keyof ParamListBase,
    NavigationState,
    NativeStackNavigationOptions,
    EventMapBase
  >;
}
