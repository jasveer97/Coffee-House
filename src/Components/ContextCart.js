import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
   

        <section className="main-cart-section">
          <h1>Cart</h1>
          <p className="total-items">
            Selected <span className="total-items-count">{totalItem} </span>{" "}
            items in cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
     
      <section className="main-cart-section">
        <h1>Cart</h1>
        <p className="total-items">
        Selected <span className="total-items-count">{totalItem} </span>{" "}
            items in cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};
export default ContextCart;
