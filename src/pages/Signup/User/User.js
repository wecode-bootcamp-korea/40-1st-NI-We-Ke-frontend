import React from 'react';
import { Link } from 'react-router-dom';
import './User.scss';

const User = ({ text }) => {
  const { title, link, url, agree } = text;

  return (
    <section className="user">
      <p>{link}</p>
      <div className="userForm">
        <input className="firstInput" type="email" placeholder="이메일" />
        {title === '로그인' && <input type="password" placeholder="비밀번호" />}
        <p className="agree">{agree}</p>
        <Link to={url} className="link">
          <button>{title}</button>
        </Link>
      </div>
    </section>
  );
};

export default User;
