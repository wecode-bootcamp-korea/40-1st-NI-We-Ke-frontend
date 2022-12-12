import React from 'react';
import { useLocation } from 'react-router-dom';
import User from './User/User';
import './Signup.scss';

const Signup = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const isSelectLogin = currentURL === '/login';

  return (
    <section className="signup">
      <User text={isSelectLogin ? LOGIN_TEXT : SIGNUP_TEXT} />
    </section>
  );
};

const LOGIN_TEXT = {
  title: '로그인',
  link: '로그인을 위해 이메일을 입력해주세요',
  url: '/login',
  agree:
    '계속 진행하면 나위키의 개인 정보 처리 방침 및 이용약관에 동의하게 됩니다.',
  checkId: '아이디가 일치하지 않습니다',
  checkPw: '비밀번호가 일치하지 않습니다',
};

const SIGNUP_TEXT = {
  title: '가입',
  link: '가입을 위해 이메일을 입력해주세요',
  url: '/signup',
  agree:
    '계속 진행하면 나위키의 개인 정보 처리 방침 및 이용약관에 동의하게 됩니다.',
  checkId: '아이디는 "@"를 포함해야 합니다',
  checkPw: '비밀번호는 8자리 이상 입력해주세요',
};

export default Signup;
