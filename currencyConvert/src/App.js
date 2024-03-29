import './App.css';
import React from 'react';
import CurrencyInput from './CurrencyInput';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch(
      'http://data.fixer.io/api/latest?access_key=0ce522574c9b9c51f85813161ed6c284'
    )
      .then((rec) => rec.json())
      .then((data) => {
        setRates(data.rates);
      });
    // axios
    //   .get(
    //     'http://data.fixer.io/api/latest?access_key=0ce522574c9b9c51f85813161ed6c284'
    //   )
    //   .then((response) => {
    //     setRates(response.data.rates);
    //   });
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(2);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
}

export default App;
// const fM = (arr) => {
//   let mN = 1;
//   for (let i = 1; i <= arr.length + 1; i++) {
//     console.log(i);
//     if (arr.indexOf(i) === -1) {
//       mN = i;
//       //console.log(mN);
//       return mN;
//     }
//   }
// return mN;
// };
// fM([4]);
// //console.log(fM([1, 3]));

// const arr = ['aa', 'djdjdjd', 'aaa'];
// let r = '';
// arr.forEach((el) => (el.length > r.length ? (r = el) : null));
// console.log(r);

// const arr = [1, 2, 3];
// const res = arr.map((el) => (el === 2 ? 0 : el));
// console.log(res);
