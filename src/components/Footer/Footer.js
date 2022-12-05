import React from 'react';
import '../Footer/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapperBox">
        <div className="linkAlign">
          <ul className="linkBox">
            {FOOTER_LINK.map(info => (
              <li key={info.id}>
                <a className="subTitle" href={info.link}>
                  {info.text}
                </a>
              </li>
            ))}
          </ul>

          <ul className="help">
            <li className="subTitle">도움말</li>
            {FOOTER_HELP.map(info => (
              <li key={info.id}>
                <a className="linkText" href={info.link}>
                  {info.text}
                </a>
              </li>
            ))}
          </ul>

          <ul className="aboutNiweke">
            <li className="subTitle">ABOUT NIWEKE</li>
            {FOOTER_ABOUT.map(info => (
              <li key={info.id}>
                <a className="linkText" href={info.link}>
                  {info.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="icons">
          {FOOTER_ICONS.map(info => (
            <li key={info.id}>
              <a href={info.link}>
                <img src={info.src} alt={info.sns} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

const FOOTER_LINK = [
  {
    id: 1,
    link: 'https://about.nike.com/en/newsroom',
    text: '새로운 소식',
  },
  { id: 2, link: 'https://www.nike.com/kr/membership', text: '멤버가입' },
  { id: 3, link: 'https://www.nike.com/kr/retail', text: '매장찾기' },
  {
    id: 4,
    link: 'https://www.nike.com/kr/stories',
    text: '나이키 저널',
  },
];

const FOOTER_HELP = [
  {
    id: 1,
    link: 'https://www.nike.com/kr/help/a/nike-sign-in-issue-kr',
    text: '로그인 안내',
  },
  {
    id: 2,
    link: 'https://www.nike.com/kr/orders/details/',
    text: '주문배송조회',
  },
  {
    id: 3,
    link: 'https://www.nike.com/kr/help/a/returns-policy-kr',
    text: '반품 정책',
  },
  {
    id: 4,
    link: 'https://www.nike.com/kr/help/a/returns-policy-kr',
    text: '결제 방법',
  },
  {
    id: 5,
    link: 'https://www.nike.com/kr/help/a/announcements-kr',
    text: '공지사항',
  },
  {
    id: 6,
    link: 'https://www.nike.com/kr/help/#contact',
    text: '문의하기',
  },
];

const FOOTER_ABOUT = [
  {
    id: 1,
    link: 'https://about.nike.com/en/newsroom',
    text: '소식',
  },
  {
    id: 2,
    link: 'https://about.nike.com/en/newsroom',
    text: '채용',
  },
  {
    id: 3,
    link: 'https://investors.nike.com/Home/default.aspx',
    text: '투자자',
  },
  {
    id: 4,
    link: 'https://www.nike.com/kr/sustainability',
    text: '지속가능성',
  },
];

const FOOTER_ICONS = [
  {
    id: 1,
    src: '',
    link: 'https://twitter.com/nikecom_kr',
    sns: 'twitter',
  },
  {
    id: 2,
    src: '',
    link: 'https://www.facebook.com/nike',
    sns: 'facebook',
  },
  {
    id: 3,
    src: '',
    link: 'https://www.youtube.com/user/nike',
    sns: 'youtube',
  },
  {
    id: 4,
    src: '',
    link: 'https://www.instagram.com/nike/',
    sns: 'instagram',
  },
];
