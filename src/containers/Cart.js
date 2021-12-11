import React, { useState } from 'react';

const Cart = ({ products }) => {
  const [price,setPrice] = useState();
  const [quantity, setQuantity] = useState(1);
  const renderCart = products.map((product) => {
    const { title, image, price, category } = product;
    return (
      <div className="cart-items">
        <div className="image-box">
          <img src={image} style={{ height: '120px' }} />
        </div>
        <div className="about">
          <h1 className="title">{title}</h1>
          <h3 className="subtitle">{category}</h3>
        </div>
        <div className="counter">
          <div className="btn" onClick={}>+</div>
          <div className="count">1</div>
          <div className="btn" onClick={}>-</div>
        </div>
        <div className="prices">
          <div className="amount">${price}</div>
          <div className="save">
            <u>Save for later</u>
          </div>
          <div className="remove">
            <u>Remove</u>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="header">
          <h3 className="heading">Shopping Cart</h3>
          <h5 className="action">Remove All</h5>
        </div>
        {renderCart}
        <hr />
        <div className="checkout">
          <div className="total">
            <div>
              <div className="subtotal">Sub-Total (2 items) : </div>
            </div>
            <div className="total-amount">$6.18</div>
          </div>
          <button className="button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

{
  /* <h1>{title}hello</h1>
          <img src={image} alt={title} width="300" height="300" />
          <h3>${price}</h3> */
}
