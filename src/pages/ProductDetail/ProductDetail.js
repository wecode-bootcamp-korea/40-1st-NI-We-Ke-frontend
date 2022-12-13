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
        {PRODUCT_DETAIL_INFO.map(detail => (
          <>
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
              <h1>{detail.productName}</h1>
              <h2>{detail.gender}</h2>
              <p>{detail.price}</p>
              <p>사이즈 선택</p>
              {PRODUCT_DETAIL_INFO.map(detail => (
                <button className="sizeBtn" key={detail.size.id}>
                  {detail.size.sizeNum}
                </button>
              ))}
              <section className="productExplain">
                <button className="gotoCart" onClick={onClickDraw}>
                  장바구니
                </button>
                <button className="gotoWishList" onClick={onClickDraw}>
                  위시리스트
                </button>
                <p>{detail.productText}</p>
                <div className="review">review ({detail.review.length})</div>
                <ul>
                  <li>review text</li>
                  <li>review text</li>
                  <li>review text</li>
                  <li>review text</li>
                  <li>review text</li>
                </ul>
              </section>
            </section>
          </>
        ))}
      </article>
      <section className="detailSection"></section>
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

const PRODUCT_DETAIL_INFO = [
  {
    productName: 'Air Marc 50',
    gender: 'Men',
    price: '100,000원',
    size: [
      { id: 1, sizeNum: 200 },
      { id: 2, sizeNum: 210 },
      { id: 3, sizeNum: 220 },
      { id: 4, sizeNum: 230 },
      { id: 5, sizeNum: 240 },
      { id: 6, sizeNum: 250 },
      { id: 7, sizeNum: 260 },
      { id: 8, sizeNum: 270 },
      { id: 9, sizeNum: 280 },
    ],
    productText:
      '빛이 그대로 살아 있는 나위키 에어마크 50은 OG 농구화로서 많은 사랑을 받아온 디자인에 새로운 멋을 더했습니다. 튼튼하게 스티치 처리된 오버레이와 깔끔한 마감 처리, 과하지 않은 딱 절제된 화려함으로 빛나는 존재감을 발휘해 보세요.',
    review: ['review 1', 'review 2', 'review 3', 'review 4', 'review 5'],
  },
];
