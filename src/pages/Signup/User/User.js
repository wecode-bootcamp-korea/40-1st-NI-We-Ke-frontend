import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.scss';

const User = ({ text }) => {
  const { title, link, agree, checkId, checkPw } = text;
  const [userForm, setUserForm] = useState({ id: '', password: '' });
  const navigate = useNavigate();
  const isCheckId = userForm.id.includes('@') && userForm.id.length > 1;
  const isCheckPw = userForm.password.length >= 8;
  const isValid = isCheckId && isCheckPw;

  const onChangeUserInfo = e => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const onClickValidUser = e => {
    e.preventDefault();

    fetch('http://10.58.52.138:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userForm.id,
        password: userForm.password,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('네트워크가 불안정합니다. 다시 시도 해 주세요');
      })
      .catch(error => console.error(error))
      .then(data => {
        if (!!data.accessToken) {
          localStorage.setItem('TOKEN', data.token);
          alert('로그인에 성공했습니다');
          navigate('/main');
        } else {
          alert('아이디와 비밀번호를 확인 해 주세요');
        }
      });
  };

  return (
    <section className="user">
      <p>{link}</p>
      <form className="userForm">
        <input
          name="id"
          className={`inputId ${
            !isCheckId && userForm.id.length > 0 ? 'alert' : ''
          }`}
          type="email"
          onChange={onChangeUserInfo}
          placeholder="이메일"
        />
        <span
          className={`alertText ${
            !isCheckId && userForm.id.length > 0 ? 'Active' : ''
          }`}
        >
          {checkId}
        </span>
        <input
          name="password"
          className={`inputPw ${
            !isCheckPw && userForm.password.length > 0 ? 'alert' : ''
          }`}
          type="password"
          onChange={onChangeUserInfo}
          placeholder="비밀번호"
        />
        <span
          className={`alertText ${
            !isCheckPw && userForm.password.length > 0 ? 'Active' : ''
          }`}
        >
          {checkPw}
        </span>
        <p className="agree">{agree}</p>

        <button
          className={`loginBtn ${isValid ? 'Active' : ''}`}
          type="submit"
          onClick={onClickValidUser}
          disabled={!isValid}
        >
          {title}
        </button>
      </form>
    </section>
  );
};

export default User;
