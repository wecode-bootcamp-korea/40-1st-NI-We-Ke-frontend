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
