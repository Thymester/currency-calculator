import React, { useState } from 'react';
import './App.css';

function App() {
  const [bills, setBills] = useState({
    $1: '',
    $5: '',
    $10: '',
    $20: '',
    $50: '',
    $100: ''
  });
  const [coins, setCoins] = useState({
    Penny: '',
    Nickel: '',
    Dime: '',
    Quarter: '',
    'Half Dollar': ''
  });

  const calculateTotal = () => {
    let total = 0;
    for (const bill in bills) {
      const value = parseFloat(bills[bill]);
      if (!isNaN(value)) {
        total += value * parseInt(bill.substring(1));
      }
    }
    for (const coin in coins) {
      const value = parseFloat(coins[coin]);
      if (!isNaN(value)) {
        const coinValue = getCoinValue(coin);
        total += value * coinValue;
      }
    }
    return numberWithCommas(total.toFixed(2));
  };
  
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getCoinValue = (coin) => {
    switch (coin) {
      case 'Penny':
        return 0.01;
      case 'Nickel':
        return 0.05;
      case 'Dime':
        return 0.1;
      case 'Quarter':
        return 0.25;
      case 'Half Dollar':
        return 0.5;
      default:
        return 0;
    }
  };

  const handleBillChange = (event, bill) => {
    const value = event.target.value;
    setBills(prevState => ({ ...prevState, [bill]: value }));
  };

  const handleCoinChange = (event, coin) => {
    const value = event.target.value;
    setCoins(prevState => ({ ...prevState, [coin]: value }));
  };

  return (
    <div className="App">
      <h1>US Currency Calculator</h1>
      <div>
        <h2>Bills</h2>
        {Object.entries(bills).map(([bill, value]) => (
          <div key={bill}>
            <label>{bill}</label>
            <input
              type="number"
              min="0"
              value={value}
              onChange={e => handleBillChange(e, bill)}
            />
          </div>
        ))}
      </div>
      <div>
        <h2>Coins</h2>
        {Object.entries(coins).map(([coin, value]) => (
          <div key={coin}>
            <label>{coin}</label>
            <input
              type="number"
              min="0"
              value={value}
              onChange={e => handleCoinChange(e, coin)}
            />
          </div>
        ))}
      </div>
      <h2>Total Amount: ${calculateTotal()}</h2>
    </div>
  );
}

export default App;
