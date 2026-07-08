import React, { useContext, useState } from "react";

import { apiClient } from "../api";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const estimatedMargin = (Number(stockQuantity) * Number(stockPrice || 0)).toFixed(2);

  const handleBuyClick = async () => {
    await apiClient.post("/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "BUY",
    });

    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="buy-window-overlay">
      <div className="trade-ticket" id="buy-window">
        <div className="trade-ticket__header">
          <div>
            <p className="trade-ticket__eyebrow">Buy Order</p>
            <h3>{uid}</h3>
          </div>
          <button
            type="button"
            className="trade-ticket__close"
            onClick={handleCancelClick}
            aria-label="Close buy window"
          >
            x
          </button>
        </div>

        <div className="trade-ticket__body">
          <div className="trade-ticket__grid">
            <label className="trade-field" htmlFor="qty">
              <span>Quantity</span>
              <input
                type="number"
                name="qty"
                id="qty"
                min="1"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
              />
            </label>

            <label className="trade-field" htmlFor="price">
              <span>Price</span>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                min="0"
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
              />
            </label>
          </div>

          <div className="trade-ticket__summary">
            <div>
              <p className="trade-ticket__label">Order type</p>
              <strong>Market Buy</strong>
            </div>
            <div>
              <p className="trade-ticket__label">Estimated value</p>
              <strong>Rs {estimatedMargin}</strong>
            </div>
          </div>

          <div className="trade-ticket__footer">
            <p className="trade-ticket__margin">Margin required Rs {estimatedMargin}</p>
            <div className="trade-ticket__actions">
              <button type="button" className="btn btn-blue" onClick={handleBuyClick}>
                Buy
              </button>
              <button type="button" className="btn btn-grey" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
