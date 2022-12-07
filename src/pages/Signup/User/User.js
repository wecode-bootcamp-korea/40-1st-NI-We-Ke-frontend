import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './User.scss';

const User = ({ text }) => {
  const { title, link, url, agree } = text;
  const [userForm, setUserForm] = useState({ id: '', password: '' });
  const navigate = useNavigate();

  function onChangeUserInfo(e) {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  }

  const isValid = userForm.id.includes('@') && userForm.password.length >= 8;

  function onClickValidUser(e) {
    navigate('/main');
    e.preventDefault();

    fetch('http://10.58.52.238:3000/auth/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json;charset=utf-8' },
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
      .catch(error => console.log(error))
      .then(data => {
        if (data.message === 'login success') {
          localStorage.setItem('TOKEN', data.token);
          alert('로그인에 성공했습니다');
          navigate('/main');
        } else {
          alert('아이디와 비밀번호를 확인 해 주세요');
        }
      });
  }

  return (
    <section className="user">
      <p>{link}</p>
      <form className="userForm">
        <input
          name="id"
          className="firstInput"
          type="email"
          onChange={onChangeUserInfo}
          placeholder="이메일"
        />
        <input
          name="password"
          type="password"
          onChange={onChangeUserInfo}
          placeholder="비밀번호"
        />
        <p className="agree">{agree}</p>
        <Link to={url} className="link">
          <button
            className={isValid ? 'loginBtnActive' : 'loginBtn'}
            type="submit"
            onClick={onClickValidUser}
            disabled={!isValid}
          >
            {title}
          </button>
        </Link>
      </form>
    </section>
  );
};

export default User;
