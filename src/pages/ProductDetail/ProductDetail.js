import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = () => {
  const modal = useRef();
  const [isVisibleDraw, setIsVisbleDraw] = useState(false);
  const [isVisibleInfo, setIsVisbleInfo] = useState(false);
  const [isVisibleMinor, setIsVisbleMinor] = useState(false);
  const [isVisibleReview, setIsVisibleReview] = useState(false);
  const [data, setData] = useState([]);

  const idParam = useParams();
  const numsIdParams = Number(idParam.id);
  console.log(numsIdParams);

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

  // useEffect(() => {
  //   fetch(`http://10.58.52.128:3000/products/detail/${idParam.id}`)
  //     .then(res => res.json())
  //     .then(datas => {
  //       setData(datas);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`http://10.58.52.128:3000/products/detail/${numsIdParams}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);
  console.log(data);

  return (
    <div className="productDetail">
      <div>
        <article className="productContainer">
          <section className="imgSection">
            <img src={data.images[0].imageUrl.value} alt="썸네일 이미지 1" />
            <img src={data.images.imageUrl} alt="썸네일 이미지 2" />
            <img src={data.images.imageUrl} alt="썸네일 이미지 3" />
          </section>
          <section className="stickySection">
            {/* <h1>{data[0].productName}</h1> */}
            {/* <h2>{data[0].gender}</h2> */}
            <p>{data.price}</p>
            <button className="sizeBtn"> {data.size}</button>

            <section className="productExplain">
              <button className="gotoCart" onClick={onClickDraw}>
                장바구니
              </button>
              <button className="gotoWishList" onClick={onClickDraw}>
                위시리스트
              </button>
              <ul>
                <h3 className="boldTitle" onClick={onClickReview}>
                  {/* Review ({data[0].reviews.length}) */}
                </h3>
                <div className="reviewSection">
                  {/* {data[0].reviews.map(review => {
                    return (
                      <div
                        className={`review
                            ${isVisibleReview ? 'open' : 'close'}`}
                        key={review.id}
                      >
                        <li className="reviewTitle" {...review}>
                          <span>{review.email}</span>
                        </li>
                        <li className="reviewText">{review.review}</li>
                      </div>
                    );
                  })} */}
                </div>
              </ul>
            </section>
          </section>
        </article>
        <section className="productDetailSection">
          <article className="concept">
            <img src={data.images.imageUrl} alt="컨셉이미지" />
          </article>
          <article className="concept">
            <img src={data.images.imageUrl} alt="컨셉이미지" />
          </article>
          <article className="concept">
            <img src={data.images.imageUrl} alt="컨셉이미지" />
          </article>
        </section>
      </div>

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
