import React from 'react';
import { Link } from 'react-router-dom';
import './FreeShipping.scss';

const FreeShipping = () => {
  return (
    <div className="box">
      <h1 className="title">멤버에게 제공되는 무료 배송 서비스</h1>
      <span className="text">
        나이키 멤버가 되어 무료배송 서비스를 비롯한 다양한 혜택을 누려보세요.
        <Link to="/" className="link">
          가입하기
        </Link>{' '}
        또는{' '}
        <Link to="/" className="link">
          로그인
        </Link>
      </span>
    </div>
  );
};

export default FreeShipping;
