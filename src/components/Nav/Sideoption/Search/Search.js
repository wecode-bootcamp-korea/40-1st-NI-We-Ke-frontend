import React, { useState, useRef, useEffect } from 'react';
import useOutSideClick from '../../../../utils/hooks/useOutSideClick';
import Searchresult from './Searchresult';

import './Search.scss';

const Search = () => {
  const [data, setData] = useState([]);
  const [searchOpen, setSearchOpen] = useState(100);
  const [inputValue, setInputValue] = useState('');
  const ref = useRef();

  const onClickInput = () => {
    setSearchOpen(0);
    setInputValue('');
  };

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  useOutSideClick(ref, () => setSearchOpen(100));

  useEffect(() => {
    fetch('./data/SearchData.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);
  return (
    <div className="searchSection">
      <input className="search" type="text" onClick={onClickInput} />

      <section
        className="dropdownSection"
        style={{ left: `${searchOpen}vw` }}
        ref={ref}
      >
        <div className="searchHeader">
          <input
            className="searchInput"
            type="text"
            placeholder="검색"
            value={inputValue}
            onChange={onChangeInput}
          />
        </div>
        <section className="searchBody">
          <article className="title">검색결과</article>
          <article className="content">
            {inputValue.length === 0 ? <p>검색어를 입력하세요</p> : null}
            {data.map(searchdata => {
              return inputValue.length > 0 &&
                searchdata.value.includes(inputValue) ? (
                <Searchresult
                  key={searchdata.id}
                  img={searchdata.img}
                  value={searchdata.value}
                  price={searchdata.price}
                />
              ) : null;
            })}
          </article>
        </section>
      </section>
    </div>
  );
};

export default Search;
