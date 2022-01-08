const navigationParams = {
  RootStackParamList: {
    file: 'RootStackNav.tsx',
    before: '/Stack.Group',
    tag: 'Stack.Screen',
    config: 'ScreenInstanceConfig',
  },
  MainTabParamList: {
    file: 'MainTabNav.tsx',
    before: '/Tab.Navigator',
    tag: 'Tab.Screen',
    config: 'TabInstanceConfig',
  },
  DrawerParamList: {
    file: 'DrawerNav.tsx',
    before: '/Drawer.Navigator',
    tag: 'Drawer.Screen',
    config: 'DrawerInstanceConfig',
  },
  AuthenticationFlowStackParamList: {
    file: 'AuthenticationFlowStackNav.tsx',
    before: 'Stack.Screen',
    tag: 'Stack.Screen',
    config: 'ScreenInstanceConfig',
  },
};

module.exports = {
  prompt: ({prompter, args}) => {
    const questions = [
      {
        type: 'input',
        name: 'screenName',
        message: "What's the screen name?",
      },
      {
        type: 'select',
        name: 'paramList',
        message: "What's the target param list?",
        choices: ['RootStackParamList', 'MainTabParamList', 'DrawerParamList', 'AuthenticationFlowStackParamList'],
      },
    ];
    return prompter.prompt(questions).then(answers => {
      const {paramList, screenName} = answers;
      const navigationParam = navigationParams[paramList];
      const fileName = screenName.endsWith('Screen') ? screenName : `${screenName}Screen`;
      const newScreenName = screenName.endsWith('Screen') ? screenName.replace(/Screen$/, '') : screenName;

      return {...answers, navigationParam, fileName, screenName: newScreenName};
    });
  },
};
