import React from 'react';
import './OrderHistory.scss';

const OrderHistory = () => {
  return (
    <div className="orderHistory">
      <h1 className="title">주문 내역</h1>
      <div className="payment">
        <span className="text">상품 금액 </span>
        <span className="text">139,000</span>
      </div>
      <div className="payment">
        <span className="text">배송비</span>
        <span className="text">무료</span>
      </div>
      <div className="payment">
        <span className="text">총 할인</span>
        <span className="text">10,000</span>
      </div>
      <div className="underBorder" />
      <div className="payment">
        <span className="text">총 결제 금액</span>
        <span className="text">129,000</span>
      </div>
      <div className="underBorder" />
      <button className="order">주문 결제</button>
    </div>
  );
};

export default OrderHistory;
