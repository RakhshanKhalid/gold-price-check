// SilverPriceCard.jsx
import React, { useState } from "react";
import Silver from "../assets/img_silver.png";

export default function SilverPriceCard({ prices }) {
  const [unit, setUnit] = useState("g");
  const [currency] = useState("INR"); // fixed for now

  const getPrice = () => {
    if (!prices[`INR${"XAG"}`]) return null;
    const pricePerOunce = prices[`INR${"XAG"}`]; // already in INR

    if (unit === "g") return (pricePerOunce / 31.1035).toFixed(2);
    if (unit === "kg") return (pricePerOunce * (1000 / 31.1035)).toFixed(2);
    return pricePerOunce.toFixed(2);
  };

  return (
    <div className="price-card">
      <div className="price-card-head">
        <img src={Silver} alt="gold" className="logo" />
        <hr className="seperator" />
        <h2 className="text-xl font-semibold mb-4">Silver (XAG)</h2>
      </div>

      <div className="price-card-content">
        <p className="text-lg font-bold text-center">
          {getPrice()} {currency} <span>/</span>
        </p>

        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="g">gram (g)</option>
          <option value="oz">ounce (oz)</option>
          <option value="kg">kilogram (kg)</option>
        </select>
      </div>
    </div>
  );
}
