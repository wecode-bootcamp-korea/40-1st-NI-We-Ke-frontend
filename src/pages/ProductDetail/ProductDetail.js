import React, { useState, useEffect, useRef } from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  const modal = useRef();
  const [isVisible, setIsVisble] = useState(false);
  const [isVisible2, setIsVisble2] = useState(false);
  const [isVisible3, setIsVisble3] = useState(false);
  const onClickDraw = () => {
    setIsVisble(true);
  };
  const onClickInfo = () => {
    setIsVisble2(true);
  };
  const onClickPrivilege = () => {
    setIsVisble3(true);
  };
  useOnClickOutSide(modal, () => {
    setIsVisble(false);
  });
  useOnClickOutSide(modal, () => {
    setIsVisble2(false);
  });
  useOnClickOutSide(modal, () => {
    setIsVisble3(false);
  });
  return (
    <div className="drawPage">
      <article className="container">
        {/* TODO : imgSection img width는 퍼센트 혹은 반응형으로 만들자 */}
        <section className="imgSection"></section>
        <section className="stickySection">
          <section className="productExplain">
            1<br />
            1<br />
            <button onClick={onClickDraw}>응모하기</button>
          </section>
        </section>
      </article>
      <div className="dummy">
        <button onClick={onClickInfo}>상품정보제공고시</button>
        <button onClick={onClickPrivilege}>미성년자 권리보호안내</button>
      </div>
      {isVisible && (
        <article className="drawModal" ref={modal}>
          응모 모달입니다
        </article>
      )}
      {isVisible2 && (
        <article className="drawModal" ref={modal}>
          정보제공 모달입니다
        </article>
      )}
      {isVisible3 && (
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
