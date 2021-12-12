import React, { useState, useEffect } from 'react';

const Cart = ({ products, removeItem }) => {
  const [cartItems, setCartItems] = useState(products);
  let sum = cartItems.reduce((prev, curr) => curr.price + prev, 0);
  console.log('SUM:', sum);

  const [total, setTotal] = useState(sum);

  const removeAll = () => {
    if (cartItems.length > 0) {
      setCartItems([]);
    } else {
      alert('No products in the cart!');
    }
  };

  const renderCart = cartItems.map((item) => {
    const { title, image, price, category, quantity, id } = item;
    const [count, setCount] = useState(quantity);
    const [amount, setAmount] = useState(quantity * price);

    useEffect(() => {
      setAmount(count * price);
    }, [count]);

    return (
      <div key={id} className="cart-items">
        <div className="image-box">
          <img src={image} style={{ height: '120px' }} />
        </div>
        <div className="about">
          <h1 className="title">{title}</h1>
          <h3 className="subtitle">{category}</h3>
        </div>
        <div className="counter">
          <div className="btn" onClick={() => setCount(count + 1)}>
            +
          </div>
          <div className="count">{count}</div>
          <div
            className="btn"
            onClick={() => (count > 1 ? setCount(count - 1) : setCount(1))}
          >
            -
          </div>
        </div>
        <div className="prices">
          <div className="amount">${amount}</div>
          <div className="save">
            <u>Save for later</u>
          </div>
          <div className="remove">
            <u
              onClick={() => {
                removeItem(id);
              }}
            >
              Remove
            </u>
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
          <h5 className="action" onClick={removeAll}>
            Remove All
          </h5>
        </div>
        {renderCart}
        <hr />
        <div className="checkout">
          <div className="total">
            <div>
              <div className="subtotal">
                Sub-Total ({cartItems.length} items) :{' '}
              </div>
            </div>
            <div className="total-amount">${total}</div>
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
