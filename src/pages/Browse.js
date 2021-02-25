import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../Coin";
import "../Browse.css";

function Browse() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )

      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log("Error found"));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
   
    <div className="coin-app">
      <div className="coin-search font-bold">
        
        <section className = "webdesigntuts-workshop">
           <form>
          <input
              type="text"
              placeholder="Find a crypto currency"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
        
        </section>
 
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={
              Math.round(coin.price_change_percentage_24h * 100) / 100
            }
            volume={coin.total_volume}
            symbol={coin.symbol}
          />
        );
      })}
    </div>
  );
}

export default Browse;
