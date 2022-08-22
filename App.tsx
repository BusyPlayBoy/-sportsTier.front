import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import AppInner from './AppInner';

export type LoggedInParamList = {
  Home: undefined;
};

export type RootStackParamList = {
  LogIn: undefined;
  SignUp_1: undefined;
  SignUP_2: undefined;
  FindId: undefined;
  FindPassword: undefined;
};

function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

export default App;
