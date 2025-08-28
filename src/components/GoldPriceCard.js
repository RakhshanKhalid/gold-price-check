// GoldPriceCard.jsx
import React, { useState } from "react";

export default function GoldPriceCard({ prices }) {
  const [unit, setUnit] = useState("g");
  const [currency] = useState("INR"); // fixed for now

  const getPrice = () => {
    if (!prices[`INR${"XAU"}`]) return null;
    const pricePerOunce = prices[`INR${"XAU"}`]; // already in INR

    if (unit === "g") return (pricePerOunce / 31.1035).toFixed(2);
    if (unit === "kg") return (pricePerOunce * (1000 / 31.1035)).toFixed(2);
    return pricePerOunce.toFixed(2);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-80">
      <h2 className="text-xl font-semibold mb-4">Gold (XAU)</h2>

      <label className="block text-sm mb-2">Select Unit</label>
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      >
        <option value="g">Gram (g)</option>
        <option value="oz">Ounce (oz)</option>
        <option value="kg">Kilogram (kg)</option>
      </select>

      <p className="text-lg font-bold text-center">
        {getPrice()} {currency} / {unit}
      </p>
    </div>
  );
}
