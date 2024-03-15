import React from "react";
import "./Main.scss";

const Main = ({ products }) => {
  return (
    <main>
      <section>
        <div className="container">
          <div className="products">
            {products.map((item) => (
              <div className="card">
                <div className="card_img">
                  <img src={item.images[0]} alt="phone" />
                </div>
                <div className="card_text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <br />
                  <br />
                  <h3>{item.price}$</h3>
                  <span>{item.discountPercentage} $</span>
                  <div className="card_text_btn">
                    <button className="cart_btn">
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>
                    <button className="btn">Muddatli to`lov</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
