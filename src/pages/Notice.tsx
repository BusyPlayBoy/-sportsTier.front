import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LoggedInParamList} from '../../AppInner';
import ToggleSwitch from 'toggle-switch-react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './Home';
import OneOnOne from './OneOnOne';
import FAQ from './FAQ';
import NoticeInner from './NoticeInner';

type NoticeScreenProps = NativeStackScreenProps<LoggedInParamList, 'Notice'>;
const Tab = createMaterialTopTabNavigator();

function Notice({navigation}: NoticeScreenProps) {
  const toHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <FontAwesome5Icon
          style={styles.icon}
          name="home"
          size={30}
          onPress={toHome}
        />
      </View>
      <View style={styles.horizontalline} />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {color: 'black'},
          tabBarStyle: {backgroundColor: 'white'},
          tabBarPressColor: 'white',
          tabBarIndicatorStyle: {
            borderBottomColor: 'black',
            borderBottomWidth: 2,
          },
        }}>
        <Tab.Screen name="공지사항" component={NoticeInner} />
        <Tab.Screen name="1:1 문의" component={OneOnOne} />
        <Tab.Screen name="FAQ" component={FAQ} />
      </Tab.Navigator>
      <View style={styles.horizontalline} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 100,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  mypage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    marginLeft: 210,
  },
  horizontalline: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
});

export default Notice;
