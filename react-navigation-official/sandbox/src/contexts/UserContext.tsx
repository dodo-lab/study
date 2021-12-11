import {createUseContextAndProvider} from 'framework/utils/contextUtils';
import React, {Reducer, useMemo, useReducer} from 'react';

type UserContextParams = {
  signIn: () => void;
  signOut: () => void;
  isSignedIn: () => boolean;
};

type UserActionType = keyof Pick<UserContextParams, 'signIn' | 'signOut'>;

const [useUser, UserProvider] = createUseContextAndProvider<UserContextParams>();

const WithUser: React.FC = ({children}) => {
  const [token, dispatch] = useReducer<Reducer<string | null, UserActionType>>((_, action) => {
    switch (action) {
      case 'signIn':
        return 'signedIn';
      case 'signOut':
        return null;
    }
  }, null);

  const userContext = useMemo<UserContextParams>(
    () => ({
      signIn: () => dispatch('signIn'),
      signOut: () => dispatch('signOut'),
      isSignedIn: () => token !== null,
    }),
    [token],
  );

  return <UserProvider value={userContext}>{children}</UserProvider>;
};

export {useUser, WithUser};
