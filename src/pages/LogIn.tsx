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

function Login({navigation}: LogInScreenProps) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const onSubmit = useCallback(() => {
    if (!email || !email.trim()) {
      return Alert.alert('알림', '이메일을 입력해주세요');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요');
    }
    Alert.alert('알림', '로그인 되었습니다');
  }, [email, password]);

  const onChangeEmail = useCallback(e => {
    setEmail(e);
  }, []);
  const onChangePassword = useCallback(e => {
    setPassword(e);
  }, []);

  const toSignUp_1 = useCallback(() => {
    navigation.navigate('SignUp_1');
  }, [navigation]);
  const toFindId = useCallback(() => {
    navigation.navigate('FindId');
  }, [navigation]);
  const toFindPassword = useCallback(() => {
    navigation.navigate('FindPassword');
  }, [navigation]);

  const canGoNext = email && password;
  return (
    <DissmissKeyboardView>
      <View style={styles.titlezone}>
        <Text style={styles.title}>RealiTier</Text>
      </View>
      <View style={styles.inputWrapper}>
        {/* <Text style={styles.label}>이메일</Text> */}
        <TextInput
          style={styles.textInput}
          placeholder="아이디"
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
        {/* <Text style={styles.label}>비밀번호</Text> */}
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          keyboardType="email-address"
          ref={passwordRef}
          onSubmitEditing={onSubmit}
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
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <View style={styles.horizontalline} />
        <Pressable style={styles.items}>
          <View style={styles.ridesFriends}>
            <Text onPress={toFindId} style={styles.numbers}>
              아이디 찾기
            </Text>
            <View style={styles.verticalLine} />
            <Text onPress={toFindPassword} style={styles.numbers}>
              비밀번호 찾기
            </Text>
            <View style={styles.verticalLine} />
            <Text onPress={toSignUp_1} style={styles.numbers}>
              회원 가입
            </Text>
          </View>
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

export default Login;
