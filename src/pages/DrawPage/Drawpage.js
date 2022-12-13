import React, { useState, useEffect, useRef } from 'react';
import './Drawpage.scss';
import INFO_DATA from './infodata';
import MINER_DATA from './minerdata';

const Drawpage = () => {
  const modal = useRef();
  const [isVisibleDraw, setIsVisbleDraw] = useState(false);
  const [isVisibleInfo, setIsVisbleInfo] = useState(false);
  const [isVisibleMiner, setIsVisbleMiner] = useState(false);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    fetch('/data/drawProductData.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="drawPage">
      <article className="container">
        <section className="imgSection">
          <section className="verSection">
            <img className="verImg" src={data[0]?.img1} alt="세로이미지1" />
            <img className="verImg" src={data[0]?.img2} alt="세로이미지2" />
          </section>
          <section className="rowImg">
            <img src={data[0]?.img4} alt="가로이미지1" />
          </section>
        </section>
        <section className="stickySection">
          <section className="productExplain">
            <div className="explainText">
              <p className="productTitle">{data[0]?.name}</p>
              <p className="productText">{data[0]?.text1}</p>
              <p className="productText">{data[0]?.text2}</p>
              <p className="productPrice">{data[0]?.price}</p>
            </div>
            <button className="drawBtn" onClick={onClickDraw}>
              응모하기
            </button>
          </section>
        </section>
      </article>
      <div className="detailSection">
        <img src={data[0]?.img5} alt="가로디테일이미지1" />
        <img src={data[0]?.img6} alt="가로디테일이미지2" />
        <img src={data[0]?.img7} alt="가로디테일이미지3" />
      </div>
      <div className="drawFooter">
        <button className="footerBtn" onClick={onClickInfo}>
          상품정보제공고시
        </button>
        <button className="footerBtn" onClick={onClickPrivilege}>
          미성년자 권리보호안내
        </button>
      </div>
      {isVisibleDraw && (
        <article className="drawModal" ref={modal}>
          <div className="modalHeader">DRAW</div>
          <div className="modalBody">
            <form>
              <div className="nameSection">
                <span>이름</span>
                <input type="text" />
              </div>

              <div className="phoneSection">
                <span>휴대폰</span>
                <div className="phoneInput">
                  <input type="text" maxLength={3} />
                  <input type="text" maxLength={4} />
                  <input type="text" maxLength={4} />
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
              <div className="buttonSection">
                <button type="button" className="submitBtn">
                  응모하기
                </button>
              </div>
            </form>
          </div>
        </article>
      )}

      {isVisibleInfo && (
        <article className="infoModal" ref={modal}>
          <div className="infoModalHeader">상품정보 제공고시</div>
          <div className="infoBody">
            <ul>
              {INFO_DATA.map(data => {
                return (
                  <li key={data.id}>
                    <span className="dataTitle">{data.title}</span>
                    <span className="dataValue">{data.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      )}

      {isVisibleMiner && (
        <article className="minerModal" ref={modal}>
          <div className="minerModalHeader">미성년자 권리보호 안내</div>
          <div className="minerBody">
            <ul>
              {MINER_DATA.map(data => {
                return <li key={data.id}>{data.value}</li>;
              })}
            </ul>
          </div>
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
