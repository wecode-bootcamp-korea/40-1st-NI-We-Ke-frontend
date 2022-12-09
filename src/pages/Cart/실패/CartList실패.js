import React from 'react';
import { Link } from 'react-router-dom';
import '../Cart/CartList.scss';

const CartList = () => {
  const onSubimt = () => {
    console.log('abc');
  };
  return (
    <div className="cartList">
      <div className="bigList">
        <div className="mainCart">
          <img
            src={
              'https://secure-images.nike.com/is/image/DotCom/CW2288_111?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg'
            }
            alt="productphoto"
          />
          <div className="mainText">
            <div className="product">
              <div className="nonPrice">
                <Link to="/productList" className="link" className="cartDetail">
                  제품이름
                </Link>
                <p className="cartDetail">제품 종류</p>
                <p className="cartDetail">제품 색상</p>
                <span className="cartDetail">사이즈</span>

                <select name="사이즈" className="cartDetail">
                  <option value={250}>250</option>
                  <option value={260}>260</option>
                  <option value={270}>270</option>
                </select>
                <span>수량</span>
                <select name="수량" className="cartDetail">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <p className="cartDetail">제품가격</p>
            </div>
            <form className="cartDetail" onSubmit={onSubimt}>
              <input
                className="wishList"
                type="image"
                src="https://e7.pngegg.com/pngimages/534/1002/png-clipart-heart-shape-symbol-heart-shaped-coffee-love-heart.png"
                alt="wishlish"
              />
              <input
                className="wishList"
                type="image"
                src="https://e7.pngegg.com/pngimages/534/1002/png-clipart-heart-shape-symbol-heart-shaped-coffee-love-heart.png"
                alt="wishlish"
              />
            </form>
            <div className="cartUnder">
              <p>무료 배송</p>
              <p>도착 예정일: date</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
