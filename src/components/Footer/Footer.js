import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapperBox">
        <div className="linkAlign">
          <ul className="link">
            {FOOTER_LINK.map(info => (
              <li className="subTitle" key={info.id}>
                {info.text}
              </li>
            ))}
          </ul>

          <ul className="help">
            <li className="subTitle">도움말</li>
            {FOOTER_HELP.map(info => (
              <li className="linkText" key={info.id}>
                <p className="linkText">{info.text}</p>
              </li>
            ))}
          </ul>

          <ul className="aboutNiweke">
            <li className="subTitle">ABOUT NIWEKE</li>
            {FOOTER_ABOUT.map(info => (
              <li key={info.id}>
                <p className="linkText">{info.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="icons">
          {FOOTER_ICONS.map(info => (
            <li key={info.id}>
              <img src={info.src} alt={info.sns} />
            </li>
          ))}
        </ul>
      </div>
      <address>
        <div className="addressBox">
          <div className="location">
            <span>대한민국</span>
            <span className="copyright">
              2022 NiweKE.inc All Rights Reserved
            </span>
          </div>
          <div className="info">
            <span>이용약관</span>
            <span>개인정보처리방침</span>
          </div>
        </div>
      </address>
      <div className="textBox">
        <p className="text">
          (유)나위키코리아 대표 Lorem ipsum dolor | 서울특별시 강남구 테헤란로
          427, 10층(삼성동) | 통신판매업신고번호 2022-서울강남-00000 | 등록번호
          000-00-00000 <br /> 사업자 정보 확인 고객센터 전화 문의 000-000-0000
          FAX 00-0000-0000 | 이메일 service@niweke.co.kr | 호스팅서비스사업자
          (유)나위키코리아
        </p>
        <p className="text">
          현금 등으로 결제 시 안전 거래를 위해 저희 쇼핑몰에서 가입한
          페이코리아의 구매 안전 서비스(결제대금예치)를 이용하실 수 있습니다.{' '}
          <br />
          온라인디지털콘텐츠산업발전법에 의한 콘텐츠 보호 안내 자세히 보기
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const FOOTER_LINK = [
  {
    id: 1,
    text: '새로운 소식',
  },
  { id: 2, text: '멤버가입' },
  { id: 3, text: '매장찾기' },
  {
    id: 4,
    text: '나위키 저널',
  },
];

const FOOTER_HELP = [
  {
    id: 1,
    text: '로그인 안내',
  },
  {
    id: 2,
    text: '주문배송조회',
  },
  {
    id: 3,
    text: '반품 정책',
  },
  {
    id: 4,
    text: '결제 방법',
  },
  {
    id: 5,
    text: '공지사항',
  },
  {
    id: 6,
    text: '문의하기',
  },
];

const FOOTER_ABOUT = [
  {
    id: 1,
    text: '소식',
  },
  {
    id: 2,
    text: '채용',
  },
  {
    id: 3,
    text: '투자자',
  },
  {
    id: 4,
    text: '지속가능성',
  },
];

const FOOTER_ICONS = [
  {
    id: 1,
    src: '/images/twitter.png',
    link: 'https://twitter.com/nikecom_kr',
    sns: 'twitter',
  },
  {
    id: 2,
    src: '/images/facebook.png',
    link: 'https://www.facebook.com/nike',
    sns: 'facebook',
  },
  {
    id: 3,
    src: '/images/youtube.png',
    link: 'https://www.youtube.com/user/nike',
    sns: 'youtube',
  },
  {
    id: 4,
    src: '/images/instagram.png',
    link: 'https://www.instagram.com/nike/',
    sns: 'instagram',
  },
];
