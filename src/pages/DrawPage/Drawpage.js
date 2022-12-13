import React, { useState, useEffect, useRef } from 'react';
import './Drawpage.scss';

const Drawpage = () => {
  const modal = useRef();

  const [isVisibleDraw, setIsVisbleDraw] = useState(false);
  const [isVisibleInfo, setIsVisbleInfo] = useState(false);
  const [isVisibleMiner, setIsVisbleMiner] = useState(false);

  const onClickDraw = () => {
    setIsVisbleDraw(true);
  };

  const onClickInfo = () => {
    setIsVisbleInfo(true);
  };

  const onClickPrivilege = () => {
    setIsVisbleMiner(true);
  };

  useOnClickOutSide(modal, () => {
    setIsVisbleDraw(false);
  });

  useOnClickOutSide(modal, () => {
    setIsVisbleInfo(false);
  });

  useOnClickOutSide(modal, () => {
    setIsVisbleMiner(false);
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
      {isVisibleDraw && (
        <article className="drawModal" ref={modal}>
          <div className="modalHeader">DRAW</div>
          <div className="modalBody">
            <form>
              <div>
                <span>이름</span>
                <input type="text" />
              </div>

              <div>
                <span>휴대폰</span>
                <div className="phoneInput">
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
              <fieldset className="sizeSelect">
                <legend>size</legend>
                <div>
                  <input type="radio" id="230" name="size" value="size" />
                  <label htmlFor="230">230</label>
                </div>
                <div>
                  <input type="radio" id="240" name="size" value="size" />
                  <label htmlFor="240">240</label>
                </div>
                <div>
                  <input type="radio" id="250" name="size" value="size" />
                  <label htmlFor="250">250</label>
                </div>
                <div>
                  <input type="radio" id="260" name="size" value="size" />
                  <label htmlFor="260">260</label>
                </div>
                <div>
                  <input type="radio" id="270" name="size" value="size" />
                  <label htmlFor="270">270</label>
                </div>
                <div>
                  <input type="radio" id="280" name="size" value="size" />
                  <label htmlFor="280">280</label>
                </div>
              </fieldset>
              <button type="button" className="submitBtn">
                응모하기
              </button>
            </form>
          </div>
        </article>
      )}

      {isVisibleInfo && (
        <article className="infoModal" ref={modal}>
          정보제공 모달입니다
        </article>
      )}

      {isVisibleMiner && (
        <article className="minerModal" ref={modal}>
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

export default Drawpage;
