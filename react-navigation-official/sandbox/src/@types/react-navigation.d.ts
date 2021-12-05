import {EventMapBase, RouteConfig} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {NavigationState, ParamListBase} from '@react-navigation/routers';

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

  type RootStackParamList = {
    Home: undefined;
    Details: {userId: string; title?: string} | undefined;
    LogoHeader: undefined;
    PlacingHeaderButton: undefined;
  };
}
