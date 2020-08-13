/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Root} from 'native-base';

import Navigator from './src/app/navigations/Drawer';

const App = () => {
  return (
    <Root>
      <Navigator />
    </Root>
  );
};

export default App;
