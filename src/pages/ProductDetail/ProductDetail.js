import React, { useState, useEffect, useRef } from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  const modal = useRef();
  const [isVisibleDraw, setIsVisbleDraw] = useState(false);
  const [isVisibleInfo, setIsVisbleInfo] = useState(false);
  const [isVisibleMinor, setIsVisbleMinor] = useState(false);
  const [detailData, setDetailData] = useState([]);

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

  useEffect(() => {
    fetch('./data/productDetail.json')
      .then(res => res.json())
      .then(data => {
        setDetailData(data);
      });
  }, []);

  return (
    <div className="productDetail">
      {detailData.map(detail => {
        return (
          <div key={detail.id} {...detail}>
            <article className="container">
              <section className="imgSection">
                <ul className="imgBox">
                  <div>
                    <ul className="wrapperImgBox">
                      <li>
                        <img
                          className="product"
                          src={detail.thumnail_left}
                          alt="product"
                        />
                      </li>
                      <li>
                        <img
                          className="product"
                          src={detail.thumnail_right}
                          alt="product"
                        />
                      </li>
                    </ul>
                    <li className="rowImg">
                      <img
                        className="product"
                        src={detail.thumnail_bottom}
                        alt="product"
                      />
                    </li>
                  </div>
                </ul>
              </section>
              <section className="stickySection">
                <h1>{detail.productName}</h1>
                <h2>{detail.gender}</h2>
                <p>{detail.price}</p>
                <p className="bold">사이즈 선택</p>
                <button className="sizeBtn" key={detail.size[0].id}>
                  {detail.size[1].value}
                </button>
                <section className="productExplain">
                  <button className="gotoCart" onClick={onClickDraw}>
                    장바구니
                  </button>
                  <button className="gotoWishList" onClick={onClickDraw}>
                    위시리스트
                  </button>
                  <p>{detail.productText}</p>
                  <div className="review bold">
                    Review ({detail.review.length})
                  </div>
                  <ul key={detail.review[0].id}>
                    <li className="reviewTitle">
                      {detail.review[0].user_id}
                      <span>{detail.review[0].product_option_id}</span>
                    </li>
                    <li>{detail.review[0].text}</li>
                  </ul>
                </section>
              </section>
            </article>
            <section className="detailSection">
              <article className="concept">
                <img src={detail.detail_first} alt="컨셉이미지" />
              </article>
              <article className="concept">
                <img src={detail.detail_first} alt="컨셉이미지" />
              </article>
              <article className="concept">
                <img src={detail.detail_first} alt="컨셉이미지" />
              </article>
            </section>
          </div>
        );
      })}
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
