import { useState } from "react";
import "./styles.css";

export default function App() {
  const [price, setPrice] = useState(null);
  const [tip, setTip] = useState(0);
  function onReset() {
    const confirm = window.confirm("Are you sure you want to reset?");
    if (confirm) {
      setPrice(null);
      setTip(0);
    }
  }
  return (
    <div>
      <Bill price={price} setPrice={setPrice} />
      <Service tip={tip} setTip={setTip} />
      <Friend />
      <Calculation price={price} tip={tip} />
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

function Bill({ price, setPrice }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        type="text"
        value={price}
        placeholder="Enter a bill price"
        onChange={(e) => {
          console.log(e.target.value);
          setPrice(parseFloat(e.target.value) || 0);
        }}
      ></input>
    </div>
  );
}

function Service({ tip, setTip }) {
  return (
    <div>
      <span>How did you like the service? </span>
      <select value={tip} onChange={(e) => setTip(e.target.value)}>
        <option value={5}>It was ok (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={15}>It was amazing (15%)</option>
        <option value={20}>OMG I loved it!(20%)</option>
      </select>
    </div>
  );
}

function Friend() {
  const [friendSatisfaction, setFriendSatisfaction] = useState(null);

  return (
    <div>
      <span>How did your friend like the service? </span>
      <select
        value={friendSatisfaction}
        onChange={(e) => setFriendSatisfaction(e.target.value)}
      >
        <option value={5}>My friend said it was ok (5%)</option>
        <option value={10}>My friend said it was good (10%)</option>
        <option value={15}>My friend said it was amazing (15%)</option>
        <option value={20}>OMG my friend loved it!(20%)</option>
      </select>
    </div>
  );
}

function Calculation({ price, tip }) {
  const finalTipAmount = (price * tip) / 100;
  return (
    <div>
      <h2>
        You pay ${price + finalTipAmount} (${price} + ${finalTipAmount} tip)
      </h2>
    </div>
  );
}
