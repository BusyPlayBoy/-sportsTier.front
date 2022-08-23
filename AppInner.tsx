import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './src/pages/Home';
import LogIn from './src/pages/LogIn';
import Settings from './src/pages/Settings';
import SignUp from './src/pages/SignUp';
import FindId from './src/pages/FindId';
import FindPassword from './src/pages/FindPassword';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{tabBarLabel: '홈'}}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{title: '내 정보'}}
          />
        </Tab.Navigator>
      ) : (
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
