import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './src/pages/Home';
import Social from './src/pages/Social';
import MyPage from './src/pages/MyPage';
import Bowling from './src/pages/Bowling';
import LogIn from './src/pages/LogIn';
import SignUp from './src/pages/SignUp';
import FindId from './src/pages/FindId';
import FindPassword from './src/pages/FindPassword';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';

export type LoggedInParamList = {
  Home: undefined;
  Social: undefined;
  Settings: undefined;
  MyPage: undefined;
  Bowling: undefined;
};

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
  FindId: undefined;
  FindPassword: undefined;
};

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'home'}}
          />
          <Stack.Screen
            name="Social"
            component={Social}
            options={{title: 'Social'}}
          />
          <Stack.Screen
            name="MyPage"
            component={MyPage}
            options={{title: 'MyPage'}}
          />
          <Stack.Screen
            name="Bowling"
            component={Bowling}
            options={{title: 'Bowling'}}
          />
        </Stack.Navigator>
      ) : (
        // <Provider store={store}>
        //   <Home />
        // </Provider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="LogIn"
            component={LogIn}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: '회원가입'}}
          />
          <Stack.Screen
            name="FindId"
            component={FindId}
            options={{title: '아이디 찾기'}}
          />
          <Stack.Screen
            name="FindPassword"
            component={FindPassword}
            options={{title: '비밀번호 찾기'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;
