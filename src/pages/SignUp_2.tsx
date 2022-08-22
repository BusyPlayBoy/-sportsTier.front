import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useRef, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {RootStackParamList} from '../../App';
import DissmissKeyboardView from '../components/DismissKeyboardView';

type LogInScreenProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

function SignUp_2({navigation}: LogInScreenProps) {
  const [ymd, setYmd] = useState();
  const [region, setRegion] = useState();
  const ymdRef = useRef<TextInput | null>(null);
  const regionRef = useRef<TextInput | null>(null);

  const onSubmit = useCallback(() => {
    if (!ymd || !ymd.trim()) {
      return Alert.alert('알림', '생년월일을 입력해주세요');
    }
    if (!region || !region.trim()) {
      return Alert.alert('알림', '지역을 입력해주세요');
    }
  }, [ymd, region]);

  const onChangeYmd = useCallback(e => {
    setYmd(e.trim());
  }, []);
  const onChangeRegion = useCallback(e => {
    setRegion(e.trim());
  }, []);

  const canGoNext = ymd && region;
  return (
    <DissmissKeyboardView behavior="position">
      <View style={styles.titlezone}>
        <Text style={styles.title}>RealiTier</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>생년월일</Text>
        <TextInput
          style={styles.textInput}
          placeholder="생년월일(yyyymmdd)"
          value={ymd}
          onChangeText={onChangeYmd}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="number-pad"
          returnKeyType="next"
          onSubmitEditing={() => {
            regionRef?.current?.focus();
          }}
          blurOnSubmit={false}
          ref={ymdRef}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>지역</Text>
        <TextInput
          style={styles.textInput}
          placeholder="EX) 서울시 종로구, 경기도 분당시 팔달구"
          value={region}
          onChangeText={onChangeRegion}
          secureTextEntry
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          keyboardType="email-address"
          onSubmitEditing={() => {
            regionRef?.current?.focus();
          }}
          ref={regionRef}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            !canGoNext
              ? styles.loginButton
              : StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
          }
          disabled={!canGoNext}>
          <Text style={styles.loginButtonText}>다음</Text>
        </Pressable>
      </View>
    </DissmissKeyboardView>
  );
}

const styles = StyleSheet.create({
  titlezone: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputWrapper: {
    padding: 20,
  },
  loginButton: {
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'navy',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
  buttonZone: {
    alignItems: 'center',
  },
  items: {
    flexDirection: 'row',
  },
  ridesFriends: {
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '82%',
  },
  numbers: {
    fontSize: 12,
  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
  horizontalline: {
    marginTop: 10,
    height: 1,
    width: '80%',
    backgroundColor: '#909090',
  },
});

export default SignUp_2;
