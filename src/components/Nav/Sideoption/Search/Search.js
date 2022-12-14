import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useOutSideClick from '../../../../utils/hooks/useOutSideClick';
import Searchresult from './Searchresult';

import './Search.scss';

const Search = () => {
  const [data, setData] = useState({});
  const [searchOpen, setSearchOpen] = useState(100);
  const [inputValue, setInputValue] = useState('');

  const ref = useRef();

  const onClickInput = () => {
    setSearchOpen(0);
    setInputValue('');
  };

  const onChangeInput = e => {
    setInputValue(e.target.value);
    fetch(
      `http://10.58.52.128:3000/products/product?productName=${e.target.value}`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  };

  useOutSideClick(ref, () => setSearchOpen(100));

  return (
    <div className="searchSection">
      <button className="searchBtn" onClick={onClickInput} />

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
            name="product"
            value={inputValue}
            onChange={onChangeInput}
          />
        </div>
        <section className="searchBody">
          <article className="title">검색결과</article>
          <article className="content">
            {inputValue.length === 0 ? (
              <p>검색어를 입력하세요</p>
            ) : data.message === 'Key Error' || data.message?.length === 0 ? (
              <p>일치하는 결과가 없습니다.</p>
            ) : (
              data.message?.map(searchdata => {
                return (
                  <Searchresult
                    key={searchdata.id}
                    image={searchdata.imageUrl}
                    name={searchdata.name}
                    price={searchdata.price}
                  />
                );
              })
            )}
          </article>
        </section>
      </section>
    </div>
  );
};

export default Search;
