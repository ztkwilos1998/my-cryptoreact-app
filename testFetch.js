import fetch from 'node-fetch';

const url = "https://api.pro.coinbase.com/products";

const testFetch = async () => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

testFetch();


