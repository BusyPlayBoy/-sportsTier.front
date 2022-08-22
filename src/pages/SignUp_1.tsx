import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {RootStackParamList} from '../../App';
import DissmissKeyboardView from '../components/DismissKeyboardView';
import axios, {AxiosError} from 'axios';

type LogInScreenProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

function SignUp_1({navigation}: LogInScreenProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkpw, setCheckpw] = useState();
  const [name, setName] = useState('');
  const [ymd, setYmd] = useState();
  const [region, setRegion] = useState();
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const checkpwRef = useRef<TextInput | null>(null);
  const nameRef = useRef<TextInput | null>(null);
  const ymdRef = useRef<TextInput | null>(null);
  const regionRef = useRef<TextInput | null>(null);

  const onSubmit = useCallback(async () => {
    if (loading) {
      return;
    }
    if (!email || !email.trim()) {
      return Alert.alert('알림', '이메일을 입력해주세요');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요');
    }
    if (!checkpw || !checkpw.trim() || checkpw != password) {
      return Alert.alert('알림', '비밀번호를 확인하세요');
    }
    if (!name || !name.trim()) {
      return Alert.alert('알림', '이름을 입력해주세요');
    }
    if (!ymd || !ymd.trim()) {
      return Alert.alert('알림', '생년월일을 입력해주세요');
    }
    if (!region || !region.trim()) {
      return Alert.alert('알림', '지역을 입력해주세요');
    }
    if (
      !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
        email,
      )
    ) {
      return Alert.alert('알림', '올바른 이메일 주소가 아닙니다.');
    }
    if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@^!%*#?&]).{8,15}$/.test(password)) {
      return Alert.alert(
        '알림',
        '비밀번호는 영문,숫자,특수문자($@^!%*#?&)를 모두 포함하여 8자 이상 입력해야합니다.',
      );
    }
    try {
      setLoading(true);
      const response = await axios.post(
        '127.0.0.1:3000/account/signup',
        JSON.stringify({
          email: email,
          password: password,
          nickname: name,
          allowNotice: false,
        }),
      );
      console.log(response);
      Alert.alert('알림', '회원가입 되었습니다');
      navigation.navigate('LogIn');
    } catch (error) {
      const errorResponse = (error as AxiosError).response;
      console.log(errorResponse);
      if (errorResponse) {
        // Alert.alert('알림', error);
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  }, [email, password, checkpw, name, loading, ymd, region, navigation]);

  const onChangeEmail = useCallback(e => {
    setEmail(e.trim());
  }, []);
  const onChangePassword = useCallback(e => {
    setPassword(e.trim());
  }, []);
  const onChangeCheckpw = useCallback(e => {
    setCheckpw(e.trim());
  }, []);
  const onChangeName = useCallback(e => {
    setName(e.trim());
  }, []);
  const onChangeYmd = useCallback(e => {
    setYmd(e.trim());
  }, []);
  const onChangeRegion = useCallback(e => {
    setRegion(e.trim());
  }, []);

  const canGoNext = email && password && checkpw && name && ymd && region;
  return (
    <DissmissKeyboardView behavior="position">
      <View style={styles.titlezone}>
        <Text style={styles.title}>RealiTier</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이메일을 입력해주세요"
          value={email}
          onChangeText={onChangeEmail}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordRef?.current?.focus();
          }}
          blurOnSubmit={false}
          ref={emailRef}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="8~15자 영문, 숫자, 특수기호($@^!%*#?&) 포함"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          keyboardType="email-address"
          returnKeyType="next"
          ref={passwordRef}
          onSubmitEditing={() => {
            checkpwRef?.current?.focus();
          }}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호 확인</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력해주세요"
          value={checkpw}
          onChangeText={onChangeCheckpw}
          secureTextEntry
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          keyboardType="email-address"
          returnKeyType="next"
          ref={checkpwRef}
          onSubmitEditing={() => {
            nameRef?.current?.focus();
          }}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이름</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이름을 입력해주세요"
          value={name}
          onChangeText={onChangeName}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => {
            ymdRef?.current?.focus();
          }}
          blurOnSubmit={false}
          ref={nameRef}
        />
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
          returnKeyType="send"
          onSubmitEditing={onSubmit}
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
          disabled={!canGoNext || loading}>
          {loading ? (
            <ActivityIndicator color="blue" />
          ) : (
            <Text style={styles.loginButtonText}>회원가입</Text>
          )}
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

export default SignUp_1;
