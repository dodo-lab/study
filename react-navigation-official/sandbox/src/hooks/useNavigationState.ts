import {NavigationContainerProps, NavigationState} from '@react-navigation/native';
import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import {useEffect, useState} from 'react';

const NAVIGATION_STATE_KEY = 'NAVIGATION_STATE';

export function useNavigationState() {
  const [isReady, setIsReady] = useState(!__DEV__);
  const [navigationState, setNavigationState] = useState<NavigationState>();

  useEffect(() => {
    const restoreNavigationState = async () => {
      try {
        // DeepLinkが設定されている場合は、復元しない
        const initialUrl = await Linking.parseInitialURLAsync();

        if (!initialUrl.path) {
          const stateString = await SecureStore.getItemAsync(NAVIGATION_STATE_KEY);
          const state = stateString ? (JSON.parse(stateString) as NavigationState) : undefined;
          if (state) {
            setNavigationState(state);
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreNavigationState().catch(e => console.error(e));
    }
  }, [isReady]);

  const navigationContainerProps: Omit<NavigationContainerProps, 'children'> = {
    initialState: navigationState,
    onStateChange: state => SecureStore.setItemAsync(NAVIGATION_STATE_KEY, JSON.stringify(state)),
  };

  return [isReady, navigationContainerProps] as const;
}
