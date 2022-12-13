import React, { useState } from 'react';
import './Wish.scss';

const Wish = props => {
  const { id, name, type, price, size } = props;
  const [optionValue, setOptionValue] = useState(0);
  const onChange = event => {
    setOptionValue(Number(event.target.value));
  };

  const onClick = () => {
    alert('장바구니에 추가되었습니다.');
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
          className={`sizeMenu ${optionValue ? 'deactive' : 'active'} `}
          onChange={onChange}
        >
          <option defaultValue={0} value={0}>
            사이즈를 선택하세요
          </option>
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
          disabled={!(Number(optionValue) !== 0)}
          onClick={onClick}
        >
          장바구니에 추가
        </button>
      </div>
    </section>
  );
};

export default Wish;
