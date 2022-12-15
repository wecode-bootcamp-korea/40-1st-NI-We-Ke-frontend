import React, { useRef } from 'react';
import useOutSideClick from '../../../utils/hooks/useOutSideClick';
import './InfoModal.scss';

const InfoModal = ({ content, title, switchModal }) => {
  const modal = useRef();

  useOutSideClick(modal, switchModal);

  return (
    <article className="infoModal" ref={modal}>
      <div className="infoModalHeader">{title}</div>
      <div className="infoBody">
        <ul>
          {content.map(data => {
            return (
              <li key={data.id}>
                <span className="dataTitle">{data.title}</span>
                <span className="dataValue">{data.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default InfoModal;
