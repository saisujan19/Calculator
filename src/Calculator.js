import React, { useState } from "react";
import './cal.css';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === 'DEL') {
      setExpression(prevExpression => prevExpression.slice(0, -1));
    } else if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else {
      setExpression(prevExpression => prevExpression + value);
    }
  };

  return (
    <div className="container">
      <div className="screen_wrap">
        <div className="screen_container">
          <div className="history">{expression}</div>
          <div className="screen">{result || expression}</div>
        </div>
      </div>
      <div className="btn_wrap">
        {['C', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', '='].map(buttonValue => (
          <button key={buttonValue} className="btn" onClick={() => handleButtonClick(buttonValue)}>{buttonValue}</button>
        ))}
      </div>
    </div>
  );
}
