import React, { useState, useEffect, useRef } from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  const modal = useRef();
  const [isVisibleDraw, setIsVisbleDraw] = useState(false);
  const [isVisibleInfo, setIsVisbleInfo] = useState(false);
  const [isVisibleMinor, setIsVisbleMinor] = useState(false);

  const onClickDraw = () => {
    setIsVisbleDraw(true);
  };
  const onClickInfo = () => {
    setIsVisbleInfo(true);
  };
  const onClickPrivilege = () => {
    setIsVisbleMinor(true);
  };

  useOnClickOutSide(modal, () => {
    setIsVisbleDraw(false);
  });
  useOnClickOutSide(modal, () => {
    setIsVisbleInfo(false);
  });
  useOnClickOutSide(modal, () => {
    setIsVisbleMinor(false);
  });
  return (
    <div className="productDetail">
      <article className="container">
        <section className="imgSection">
          <ul className="imgBox">
            <li>
              <img className="product" src="" alt="product" />
            </li>
            <li>
              <img className="product" src="" alt="product" />
            </li>
            <li>
              <img className="product" src="" alt="product" />
            </li>
          </ul>
        </section>
        <section className="stickySection">
          <h1>ProductName</h1>
          <h2>MEN</h2>
          <p>100,000원</p>
          <div className="stickyImg">
            <img src="" alt="img" />
            <img src="" alt="img" />
          </div>
          <p>사이즈 선택</p>
          <section className="productExplain">
            <button className="gotoCart" onClick={onClickDraw}>
              장바구니
            </button>
            <button className="gotoWishList" onClick={onClickDraw}>
              위시리스트
            </button>
            <p>
              빛이 그대로 살아 있는 나이키 에어 포스 1 ’07은 OG 농구화로서
              <br /> 많은 사랑을 받아온 디자인에 새로운 멋을 더했습니다.
              <br />
              튼튼하게 스티치 처리된 오버레이와 깔끔한 마감 처리, 과하지 않은
              <br /> 딱 절제된 화려함으로 빛나는 존재감을 발휘해 보세요.
            </p>
            <ul className="review">
              리뷰(0000)
              <li>review text</li>
              <li>review text</li>
              <li>review text</li>
              <li>review text</li>
              <li>review text</li>
            </ul>
          </section>
        </section>
      </article>
      <div className="dummy">
        <button onClick={onClickInfo}>상품정보제공고시</button>
        <button onClick={onClickPrivilege}>미성년자 권리보호안내</button>
      </div>
      {isVisibleDraw && (
        <article className="drawModal" ref={modal}>
          <p>장바구니에 상품을 담았습니다</p>
        </article>
      )}
      {isVisibleInfo && (
        <article className="drawModal" ref={modal}>
          정보제공 모달입니다
        </article>
      )}
      {isVisibleMinor && (
        <article className="drawModal" ref={modal}>
          미성년자 모달입니다
        </article>
      )}
    </div>
  );
};
const useOnClickOutSide = (modal, handler) => {
  useEffect(() => {
    const close = event => {
      if (!modal.current || modal.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', close);
    return () => {
      document.removeEventListener('mousedown', close);
    };
  }, [modal, handler]);
};
export default ProductDetail;
