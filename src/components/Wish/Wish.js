import React, { useState } from 'react';
import './Wish.scss';

const Wish = props => {
  const { id, name, type, price, size } = props;
  const [optionValue, setOptionValue] = useState('0');
  const onChange = event => {
    setOptionValue(event.target.value);
  };

  const onClick = () => {
    alert('버튼 활성화 됨');
  };

  return (
    <section className="wish" key={id}>
      <div className="imgBox">
        <img className="img" src="" alt="상품" />
      </div>
      <div className="nameAndPrice">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>
      <p className="option">{type}</p>
      <div className="sizeSelect">
        <select
          className={`sizeMenu ${optionValue ? 'falseBtn' : 'trueBtn'} `}
          onChange={onChange}
        >
          <option value={0}>사이즈를 선택하세요</option>
          {size.map(list => {
            return (
              <option value={list.id} key={list.id}>
                {list.size}
              </option>
            );
          })}
        </select>
        <button
          className="sizeBtn"
          disabled={optionValue !== '0' ? false : true}
          onClick={onClick}
        >
          사이즈 선택
        </button>
      </div>
    </section>
  );
};

export default Wish;
