import React, { useState } from 'react';
import './Drawpage.scss';

const Drawpage = () => {
  const [isVisible, setIsVisble] = useState(false);

  const onClickHandler = () => {
    setIsVisble(true);
  };

  return (
    <div className="drawPage">
      <article className="container">
        {/* TODO : imgSection img width는 퍼센트 혹은 반응형으로 만들자 */}
        <section className="imgSection"></section>
        <section className="stickySection">
          <section className="productExplain">
            1<br />
            1<br />
            <button onClick={onClickHandler}>응모하기</button>
          </section>
        </section>
      </article>
      <div className="dummy"></div>
      {isVisible && <article className="drawModal">모달입니다</article>}
    </div>
  );
};

export default Drawpage;
