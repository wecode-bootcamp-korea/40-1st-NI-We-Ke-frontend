import React from 'react';
import './Payment.scss';

const Payment = () => {
  return (
    <section className="payment">
      <h3>결제하기</h3>
      <div className="alignBox">
        <article className="delivery">
          <h4 className="subTitle">배송 옵션</h4>
          <div className="inputBox">
            <input text="test" placeholder="test" />
            <input text="test" placeholder="test" />
          </div>
          <input className="fullWidthInput" text="test" placeholder="test" />
          <div>
            <button>직접 주소 입력</button>
          </div>
          <div className="inputBox phoneEmail">
            <input text="test" placeholder="test" />
            <input text="test" placeholder="test" />
          </div>
          <p className="alertMsg">testtesttesttesttesttest</p>
          <div>
            <button>저장 및 계속</button>
            <button>취소</button>
          </div>
          <div className="payBox">
            <h4>결제</h4>
            <div>
              <input type="radio" /> 신용카드
              <input type="radio" /> 카카오페이
              <input type="radio" /> 네이버페이
              <input type="radio" /> 페이코
              <input type="radio" /> 실시간 계좌이체
            </div>
            <input type="checkbox" /> 구매 약관에 동의합니다
            <div>
              <button>주문하기</button>
            </div>
          </div>
        </article>

        <article className="cart">
          <h4 className="subTitle">장바구니</h4>
          <div className="textBox">
            <span>상품 금액</span>
            <span className="price">103,000원</span>
          </div>
          <div className="textBox">
            <span>배송비</span>
            <span className="price">0원</span>
          </div>
          <div className="textBox">
            <span className="finalPrice">총 결제 금액</span>
            <span className="price finalPrice">103,000원</span>
          </div>
          <p className="date">도착 예정일: 12월 00일 (화) </p>
          <ul>
            <li className="product">
              <img src="" alt="product_1" />
            </li>
            <li className="text">
              <p>product name</p>
              <p>style</p>
              <p>size</p>
              <p>color</p>
              <p>count/price</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Payment;
