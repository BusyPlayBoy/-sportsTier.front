import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {LoggedInParamList} from '../../AppInner';

type MyPageScreenProps = NativeStackScreenProps<LoggedInParamList, 'MyPage'>;

function MyPage({navigation}: MyPageScreenProps) {
  const toHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.mypage}>마이 페이지</Text>
        <FontAwesome5Icon
          style={styles.icon}
          name="home"
          size={30}
          onPress={toHome}
        />
        <FontAwesome5Icon style={{marginLeft: 20}} name="user" size={30} />
      </View>

      <View style={styles.horizontalline} />
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
});

export default MyPage;
