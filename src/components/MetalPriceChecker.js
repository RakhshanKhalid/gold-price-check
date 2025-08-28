// MetalPriceChecker.jsx
import React, { useEffect, useState } from "react";
import GoldPriceCard from "./GoldPriceCard";
import SilverPriceCard from "./SilverPriceCard";

export default function MetalPriceChecker() {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_METAL_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=INR&currencies=XAU,XAG`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          setPrices(data.rates);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [API_KEY]);

  if (loading) return <p className="text-center mt-10">Loading prices...</p>;

  return (
    <div className="price-container">
      <h1 className="text-3xl font-bold mb-4">Gold & Silver Prices</h1>

      {/* Gold Card */}
      <GoldPriceCard prices={prices} />

      {/* Silver Card */}
      <SilverPriceCard prices={prices} />
    </div>
  );
}
