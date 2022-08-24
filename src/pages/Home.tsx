import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {LoggedInParamList} from '../../AppInner';
import {RootState} from '../store/reducer';

type HomeScreenProps = NativeStackScreenProps<LoggedInParamList, 'Home'>;

function Home({navigation}: HomeScreenProps) {
  const name = useSelector((state: RootState) => state.user.name);

  const toSocial = useCallback(() => {
    navigation.navigate('Social');
  }, [navigation]);
  const toMyPage = useCallback(() => {
    navigation.navigate('MyPage');
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <View style={styles.namezone}>
          <Text style={styles.nametext}>{name} 님</Text>
          <TouchableOpacity style={styles.buttonzone} onPress={toSocial}>
            <Image
              source={require('../assets/button1.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toMyPage}>
            <Image
              source={require('../assets/button2.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/button3.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.rows}>
          <TouchableOpacity>
            <Image
              source={require('../assets/bowling.png')}
              style={styles.icon}
            />
            <Text style={styles.bodytext}>볼링</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 70}}>
            <Image
              source={require('../assets/soccer.png')}
              style={styles.icon}
            />
            <Text style={styles.bodytext}>축구</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rows}>
          <TouchableOpacity>
            <Image
              source={require('../assets/basketball.png')}
              style={styles.icon}
            />
            <Text style={styles.bodytext}>농구</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 70}}>
            <Image
              source={require('../assets/baseball.png')}
              style={styles.icon}
            />
            <Text style={styles.bodytext}>야구</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rows}>
          <TouchableOpacity>
            <Image
              source={require('../assets/tennis.png')}
              style={styles.icon}
            />
            <Text style={styles.bodytext}>테니스</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 70}}>
            <Image source={require('../assets/golf.png')} style={styles.icon} />
            <Text style={styles.bodytext}>골프</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#767171',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  namezone: {
    marginTop: 12,
    marginLeft: 40,
    flexDirection: 'row',
  },
  nametext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonzone: {
    marginLeft: 120,
  },
  image: {
    marginHorizontal: 5,
    width: 30,
    height: 30,
  },
  body: {},
  rows: {
    marginTop: 50,
    marginLeft: 65,
    flexDirection: 'row',
  },
  icon: {
    width: 80,
    height: 80,
  },
  bodytext: {
    marginLeft: 25,
  },
});

export default Home;
