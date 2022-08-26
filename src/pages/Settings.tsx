import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {
  Alert,
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
import axios, {AxiosError} from 'axios';
import {useAppDispatch} from '../store';
import userSlice from '../slices/user';

type SettingsScreenProps = NativeStackScreenProps<
  LoggedInParamList,
  'Settings'
>;

function Settings({navigation}: SettingsScreenProps) {
  const dispatch = useAppDispatch();

  const toHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);
  const toNotice = useCallback(() => {
    navigation.navigate('Notice');
  }, [navigation]);

  const onLogout = useCallback(async () => {
    try {
      await axios.get(
        'http://10.0.2.2:3000/account/logout',
        {},
        // Authroization(키) : `Bearer ${accessToken}`(값) => 서버가 accessToken을 읽음
      );
      Alert.alert('알림', '로그아웃 되었습니다.');
      // 로그아웃 했으므로 정보 초기화
      dispatch(
        userSlice.actions.setUser({
          name: '',
          email: '',
          accessToken: '',
        }),
      );
    } catch (error) {
      const errorResponse = (error as AxiosError).response;
      console.error(errorResponse);
    }
  }, [dispatch]);

  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.mypage}>환경 설정</Text>
        <FontAwesome5Icon
          style={styles.icon}
          name="home"
          size={30}
          onPress={toHome}
        />
      </View>
      <View style={styles.horizontalline} />
      <View style={styles.horizontallineThick}>
        <Text style={styles.per}>알림</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyinner}>
          <Text style={styles.boldtext}>서비스 알림</Text>
        </View>
        <View style={{marginLeft: 170}}>
          <ToggleSwitch
            isOn={false}
            onColor="orange"
            offColor="grey"
            size="medium"
            onToggle={isOn => console.log('changed to : ', isOn)}
          />
        </View>
      </View>
      <View style={styles.horizontalline} />
      <View style={styles.body}>
        <View style={styles.bodyinner}>
          <Text style={styles.boldtext}>마케팅 푸시 알림</Text>
        </View>
        <View style={{marginLeft: 130}}>
          <ToggleSwitch
            isOn={false}
            onColor="orange"
            offColor="grey"
            size="medium"
            onToggle={isOn => console.log('changed to : ', isOn)}
          />
        </View>
      </View>
      <View style={styles.horizontalline} />
      <TouchableOpacity style={styles.body} onPress={toNotice}>
        <View style={styles.bodyinner}>
          <Text style={styles.boldtext}>공지사항</Text>
        </View>
        <MaterialIcons
          name="navigate-next"
          size={30}
          style={{marginLeft: 240}}
        />
      </TouchableOpacity>
      <View style={styles.horizontalline} />
      <View style={styles.horizontallineThick}>
        <Text style={styles.per}>기능</Text>
      </View>
      <TouchableOpacity style={styles.body}>
        <View style={styles.bodyinner}>
          <Text style={styles.boldtext}>캐시 데이터 삭제</Text>
        </View>
        <MaterialIcons
          name="navigate-next"
          size={30}
          style={{marginLeft: 180}}
        />
      </TouchableOpacity>
      <View style={styles.horizontalline} />
      <TouchableOpacity style={styles.body} onPress={onLogout}>
        <View style={styles.bodyinner}>
          <Text style={styles.boldtext}>로그아웃</Text>
        </View>
        <MaterialIcons
          name="navigate-next"
          size={30}
          style={{marginLeft: 240}}
        />
      </TouchableOpacity>
      <View style={styles.horizontalline} />
      <TouchableOpacity style={styles.body}>
        <View style={styles.bodyinner}>
          <Text style={styles.boldtext}>회원 탈퇴</Text>
        </View>
        <MaterialIcons
          name="navigate-next"
          size={30}
          style={{marginLeft: 235}}
        />
      </TouchableOpacity>
      <View style={styles.horizontalline} />
      <View style={styles.horizontallineThick} />
      <TouchableOpacity style={styles.body}>
        <View style={styles.bodyinner}>
          <Text style={styles.boldtext}>버전 정보 확인</Text>
        </View>
        <MaterialIcons
          name="navigate-next"
          size={30}
          style={{marginLeft: 195}}
        />
      </TouchableOpacity>
      <View style={styles.horizontalline} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 20,
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
  body: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
  },
  bodyinner: {
    marginLeft: 20,
  },
  boldtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  horizontallineThick: {
    backgroundColor: '#F2F2F2',
    height: 35,
    width: '100%',
  },
  per: {
    fontSize: 14,
    marginTop: 7,
    marginLeft: 15,
  },
});

export default Settings;
