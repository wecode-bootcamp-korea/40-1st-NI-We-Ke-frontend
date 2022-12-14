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
    const params = searchParams.getAll(value);
    const isSelected = params.includes(id);

    if (isSelected) {
      searchParams.delete(value);
      params.forEach(param => {
        if (param === id) return;

        searchParams.append(value, param);
      });
    } else {
      searchParams.append(value, id);
    }

    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="borderBottom" onClick={onClick}>
        <h4>{info.text}</h4>
      </div>
      <div className={`menu ${isOpen ? 'openMenu' : 'closeMenu'}`}>
        {info.detail.map(data => (
          <div key={data.text}>
            <label className="asibeMenuCheckbox">
              <input
                type="checkbox"
                data-id={data.text}
                data-value={data.value}
                onClick={detailClick}
              />
              {data.text}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default AsideMenuItem;
