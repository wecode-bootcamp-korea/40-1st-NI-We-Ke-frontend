import React, { useState, useEffect, useRef } from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  const modal = useRef();
  const [isVisibleDraw, setIsVisbleDraw] = useState(false);
  const [isVisibleInfo, setIsVisbleInfo] = useState(false);
  const [isVisibleMinor, setIsVisbleMinor] = useState(false);
  const [isVisibleReview, setIsVisibleReview] = useState(false);
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

  const onClickReview = () => {
    setIsVisibleReview(!isVisibleReview);
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
                {detail.size.map(size => {
                  return (
                    <button
                      className={`sizeBtn ${
                        size.id === 1 || size.id === 5 || size.id === 9
                          ? 'active'
                          : 'unactive'
                      }`}
                      key={size.id}
                      disabled={
                        !(size.id === 1 || size.id === 5 || size.id === 9)
                          ? true
                          : false
                      }
                    >
                      {size.value}
                    </button>
                  );
                })}
                <section className="productExplain">
                  <button className="gotoCart" onClick={onClickDraw}>
                    장바구니
                  </button>
                  <button className="gotoWishList" onClick={onClickDraw}>
                    위시리스트
                  </button>
                  <ul>
                    <h3 className="boldTitle" onClick={onClickReview}>
                      Review ({detail.review.length})
                    </h3>

                    {detail.review.map(review => {
                      return (
                        <div
                          className={`review
                            ${isVisibleReview ? 'open' : 'close'}`}
                          key={review.id}
                        >
                          <li className="reviewTitle" {...review}>
                            {review.user_id}
                            <span>{review.product_option_id}</span>
                          </li>
                          <li className="reviewText">{review.text}</li>
                        </div>
                      );
                    })}
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
