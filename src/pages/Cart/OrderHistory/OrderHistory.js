import React from 'react';
import './OrderHistory.scss';

const OrderHistory = props => {
  const { cartList } = props;

  const initPrice = 0;
  const totalPrice = cartList.reduce((acc, cur) => acc + cur.price, initPrice);
  const result = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="orderHistory">
      <h1 className="orderTitle">주문 내역</h1>
      <div className="orderPayment">
        <span className="ordeText">상품 금액 : </span>
        <span className="ordeText">139,000</span>
      </div>
      <div className="orderPayment">
        <span className="ordeText">배송비</span>
        <span className="ordeText">무료</span>
      </div>
      <div className="orderPayment">
        <span className="ordeText">총 할인</span>
        <span className="ordeText">10,000</span>
      </div>
      <div className="underBorder" />
      <div className="orderPayment">
        <span className="ordeText">총 결제 금액 : </span>
        <span className="ordeText">{result}</span>
      </div>
      <div className="orderUnderBorder" />
      <button className="order">주문 결제</button>
    </div>
  );
};

export default OrderHistory;
