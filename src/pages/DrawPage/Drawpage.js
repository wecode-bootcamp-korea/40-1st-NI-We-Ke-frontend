import React from 'react';
import './Drawpage.scss';
import Drawmodal from './Drawmodal/Drawmodal';

const Drawpage = () => {
  return (
    <div className="drawPage">
      <article className="container">
        <section className="imgSection"></section>
        <section className="stickySection">
          <section className="productExplain">
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            1<br />
            <button>응모하기</button>
          </section>
        </section>
      </article>
      <div className="dummy"></div>
      <Drawmodal />
    </div>
  );
};

export default Drawpage;
