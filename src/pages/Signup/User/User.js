import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User.scss';

const User = ({ text }) => {
  const { title, link, url, agree } = text;
  const [userForm, setUserForm] = useState('');

  function onChangeUserInfo(e) {
    const {name, value}
  }

  return (
    <section className="user">
      <p>{link}</p>
      <div className="userForm">
        {title === '가입' && (
          <input className="firstInput" type="name" 
          onChange={} placeholder="이름" />
        )}
        <input className="firstInput" type="email" 
        onChange={}
        placeholder="이메일" />
        <input type="password"  onChange={}
        placeholder="비밀번호" />
        <p className="agree">{agree}</p>
        <Link to={url} className="link">
          <button>{title}</button>
        </Link>
      </div>
    </section>
  );
};

export default User;
