import React, { useState, useEffect, useRef } from 'react';
import Searchresult from './Searchresult';
import './Search.scss';
import SEARCH_DATA from './searchdata';

const Search = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const ref = useRef();

  const onClickInput = () => {
    setIsVisible(true);
    setInputValue('');
  };

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  useOnClickOutSide(ref, () => setIsVisible(false));

  return (
    <div className="searchSection">
      <input className="search" type="text" onClick={onClickInput} />
      {isVisible && (
        <section className="dropdownSection" ref={ref}>
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
              {inputValue.length === 0 ? <p>검색어를 입력하세요</p> : false}

              {/* {inputValue.length > 0 &&
              !SEARCH_DATA.value.includes(inputValue) ? (
                <p>검색결과가 없습니다</p>
              ) : (
                false
              )} */}

              {SEARCH_DATA.map(searchdata => {
                return inputValue.length > 0 &&
                  searchdata.value.includes(inputValue) ? (
                  <Searchresult
                    key={searchdata.id}
                    img={searchdata.img}
                    value={searchdata.value}
                    price={searchdata.price}
                  />
                ) : (
                  false
                );
              })}
            </article>
          </section>
        </section>
      )}
    </div>
  );
};

const useOnClickOutSide = (ref, handler) => {
  useEffect(() => {
    const close = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', close);

    return () => {
      document.removeEventListener('mousedown', close);
    };
  }, [ref, handler]);
};

export default Search;
