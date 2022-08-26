import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {LoggedInParamList} from '../../AppInner';
import {RootState} from '../store/reducer';

type MyPageScreenProps = NativeStackScreenProps<LoggedInParamList, 'MyPage'>;

function MyPage({navigation}: MyPageScreenProps) {
  const name = useSelector((state: RootState) => state.user.name);

  const toHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);
  const toSettings = useCallback(() => {
    navigation.navigate('Settings');
  }, [navigation]);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.mypage}>마이 페이지</Text>
        <FontAwesome5Icon
          style={styles.icon}
          name="home"
          size={30}
          onPress={toHome}
        />
        <AntDesign
          style={{marginLeft: 20}}
          name="setting"
          size={30}
          onPress={toSettings}
        />
      </View>
      <View style={styles.horizontalline} />
      <View style={styles.body1}>
        <FontAwesome5Icon name="user" size={80} />
        <View>
          <Text style={styles.body1text}>{name}</Text>
          <Text style={styles.body1text}>한 마디</Text>
        </View>
      </View>
      <View style={styles.horizontallineThick}>
        <Text style={styles.persports}>스포츠 별 기록</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  mypage: {
    marginLeft: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 100,
  },
  horizontalline: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  body1: {
    flexDirection: 'row',
    margin: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  body1text: {
    paddingTop: 10,
    marginLeft: 40,
    fontSize: 16,
  },
  horizontallineThick: {
    backgroundColor: '#F2F2F2',
    height: 35,
    width: '95%',
    marginLeft: '2.5%',
  },
  persports: {
    fontSize: 14,
    marginTop: 7,
    marginLeft: 15,
  },
});

export default MyPage;
