import React, { useState, useEffect, useRef } from 'react';
import './Drawpage.scss';
import INFO_DATA from './infodata';
import MINER_DATA from './minerdata';
import InfoModal from './components/InfoModal';
import useOutSideClick from '../../utils/hooks/useOutSideClick';

const Drawpage = () => {
  const modal = useRef();
  const [data, setData] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectContent, setSelectContent] = useState(0);
  const [isVisibleDraw, setIsVisbleDraw] = useState(false);

  const switchModal = () => {
    setIsOpenModal(prev => !prev);
  };

  const onClickDraw = () => {
    setIsVisbleDraw(true);
  };

  useOutSideClick(modal, () => {
    setIsVisbleDraw(false);
  });

  useEffect(() => {
    fetch('/data/drawProductData.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const obj = {
    1: {
      title: '상품정보 제공고시',
      data: INFO_DATA,
    },
    2: {
      title: '미성년자 권리보호 안내',
      data: MINER_DATA,
    },
  };

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
        <button
          className="footerBtn"
          onClick={() => {
            switchModal();
            setSelectContent(1);
          }}
        >
          상품정보제공고시
        </button>
        <button
          className="footerBtn"
          onClick={() => {
            switchModal();
            setSelectContent(2);
          }}
        >
          미성년자 권리보호안내
        </button>
        {isOpenModal && (
          <InfoModal
            content={obj[selectContent].data}
            title={obj[selectContent].title}
            switchModal={switchModal}
          />
        )}
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
    </div>
  );
};

export default Drawpage;
