import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const AsideMenuItem = props => {
  const { info } = props;

  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const detailClick = event => {
    const { id, value } = event.target.dataset;
    // searchParams.getAll(value).includes(id); // adsf
    searchParams.append(value, id);
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="borderBottom" onClick={onClick}>
        <h4>{info.text}</h4>
      </div>
      <div
        className={`menu ${isOpen ? 'openMenu' : 'closeMenu'}`}
        onClick={detailClick}
      >
        {info.detail.map(data => (
          <div key={data.id}>
            <p data-id={data.text} data-value={data.value}>
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AsideMenuItem;
