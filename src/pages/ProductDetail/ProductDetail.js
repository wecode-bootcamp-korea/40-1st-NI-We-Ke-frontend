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
          <button className="gotoCatBtn" onClick={onClickDraw}>
            장바구니
          </button>
          <button className="gotoCatBtn" onClick={onClickDraw}>
            위시리스트
          </button>
          <section className="productExplain">
            <p>dummy text</p>
          </section>
        </section>
      </article>
      <div className="dummy">
        <button onClick={onClickInfo}>상품정보제공고시</button>
        <button onClick={onClickPrivilege}>미성년자 권리보호안내</button>
      </div>
      {isVisibleDraw && (
        <article className="drawModal" ref={modal}>
          응모 모달입니다
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
