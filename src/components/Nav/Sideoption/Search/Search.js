import React, { useState, useEffect, useRef } from 'react';
import './Search.scss';

const Search = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const onClickInput = () => {
    setIsVisible(true);
  };

  useOnClickOutSide(ref, () => setIsVisible(false));

  return (
    <div className="searchSection">
      <input className="search" type="text" onClick={onClickInput} />
      {isVisible && (
        <section className="dropdownSection" ref={ref}>
          <div className="searchHeader">
            <input className="searchInput" type="text" placeholder="검색" />
          </div>
          <section className="searchBody">h11i</section>
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
