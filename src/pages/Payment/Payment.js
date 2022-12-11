import React, { useState } from 'react';
import './Payment.scss';

const Payment = () => {
  const [inputs, setInputs] = useState({
    lastName: '',
    firstName: '',
    address: '',
    phoneNumber: Number(''),
    email: '',
  });
  const isFilled =
    inputs.email.includes('@') && inputs.phoneNumber.length === 11;
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const getDeliveryDate = () => {
    const today = new Date();
    const week = new Array('일', '월', '화', '수', '목', '금', '토');
    const todaysMonth = today.getMonth() + 1;
    const todaysDate = today.getDate() + 3;
    const todaysDay = today.getDay() + 3;
    const todaysDayToString = week[todaysDay];

    const deliveryDate = `도착 예정일 : ${todaysMonth}월 ${todaysDate}일 ${todaysDayToString}요일`;
    return <p className="date">{deliveryDate}</p>;
  };

  const onChangeInputs = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitInputs = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const onClickCheckedBox = e => {
    setIsChecked(!isChecked);
  };

  const onClickOrderBtn = e => {
    alert('주문을 완료했습니다');
  };

  return (
    <section className="payment">
      <h3>결제하기</h3>
      <div className="alignBox">
        <article className="delivery">
          <h4 className="subTitle">배송옵션</h4>
          <form onSubmit={onSubmitInputs}>
            <div className="inputBox">
              <input
                type="text"
                name="lastName"
                onChange={onChangeInputs}
                placeholder="성"
              />
              <input
                type="text"
                name="firstName"
                onChange={onChangeInputs}
                placeholder="이름"
              />
            </div>
            <input
              className="fullWidthInput"
              type="address"
              name="address"
              onChange={onChangeInputs}
              placeholder="주소 입력"
            />
            <div className="inputBox phoneEmail">
              <input
                type="tel"
                name="phoneNumber"
                onChange={onChangeInputs}
                placeholder="전화번호"
              />
              <input
                type="email"
                name="email"
                onChange={onChangeInputs}
                placeholder="이메일"
              />
            </div>
            <p className="alertMsg">모든 주문 관련 안내는 SMS로 전송됩니다</p>
            <div className="alignBtn">
              <button
                className={`continueBtn ${isFilled ? 'Active' : ''}`}
                disabled={!isFilled}
              >
                계속
              </button>
            </div>
          </form>
          <h4 className="subTitle">결제</h4>
          <div className={`payBox ${isOpen ? 'open' : 'close'}`}>
            <div className="radioBox">
              <input type="radio" name="pay" />
              <img src="/images/creditCard.png" alt="신용카드" />
              신용카드
            </div>
            <div className="radioBox">
              <input type="radio" name="pay" />
              <img src="/images/kakaoPay.png" alt="카카오페이" />
              카카오페이
            </div>
            <div className="radioBox">
              <input type="radio" name="pay" />
              <img src="/images/naverPay.png" alt="네이버페이" />
              네이버페이
            </div>
            <div className="radioBox">
              <input type="radio" name="pay" />
              <img src="/images/payco.jpeg" alt="페이코" />
              페이코
            </div>
            <div className="radioBox">
              <input type="radio" name="pay" />
              실시간 계좌이체
            </div>
            <div className="agreeCheckBox">
              <input
                className="agreeBtn"
                type="checkbox"
                onClick={onClickCheckedBox}
              />
              구매 약관에 동의합니다
            </div>
          </div>
        </article>

        <article className="cart">
          <h4 className="subTitle">장바구니</h4>
          <div className="alignTextBox">
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
          </div>
          {getDeliveryDate()}
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
          <button
            className={`orderBtn ${isChecked ? 'Active' : ''}`}
            onClick={onClickOrderBtn}
          >
            주문 완료
          </button>
        </article>
      </div>
    </section>
  );
};

export default Payment;
