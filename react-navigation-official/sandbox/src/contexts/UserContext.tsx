import * as SecureStore from 'expo-secure-store';
import {createUseContextAndProvider} from 'framework/utils/contextUtils';
import React, {Reducer, useEffect, useMemo, useReducer} from 'react';

type UserContextParams = {
  signIn: (token: string) => void;
  signOut: () => void;
  isSignedIn: () => boolean;
};

type UserActionType = {
  type: keyof Pick<UserContextParams, 'signIn' | 'signOut'>;
  token?: string;
};

const STORE_KEY = 'userToken';

const [useUser, UserProvider] = createUseContextAndProvider<UserContextParams>();

const WithUser: React.FC = ({children}) => {
  const [userToken, dispatch] = useReducer<Reducer<string | null, UserActionType>>((_, action) => {
    switch (action.type) {
      case 'signIn':
        return 'signedIn';
      case 'signOut':
        return null;
    }
  }, null);

  useEffect(() => {
    const restoreSync = async () => {
      try {
        const restoreToken = await SecureStore.getItemAsync(STORE_KEY);
        console.log('restore', restoreToken);
        if (restoreToken) {
          dispatch({type: 'signIn', token: restoreToken});
        }
      } catch (e) {
        console.error(e);
      }
    };

    restoreSync().catch(e => console.error(e));
  }, []);

  const userContext = useMemo<UserContextParams>(
    () => ({
      signIn: token => {
        SecureStore.setItemAsync(STORE_KEY, token)
          .then(() => dispatch({type: 'signIn', token}))
          .catch(e => console.error(e));
      },
      signOut: () => {
        SecureStore.deleteItemAsync(STORE_KEY)
          .then(() => dispatch({type: 'signOut'}))
          .catch(e => console.error(e));
      },
      isSignedIn: () => userToken !== null,
    }),
    [userToken],
  );

  return <UserProvider value={userContext}>{children}</UserProvider>;
};

export {useUser, WithUser};
