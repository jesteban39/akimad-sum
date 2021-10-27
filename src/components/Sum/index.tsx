import * as React from "react";
import "./sum.css";
function Sum() {
  const [digits, setDigits] = React.useState([] as number[]);
  const selectDigit = (event: any) => {
    setDigits((state) => [...state, parseInt(event.target.value)]);
  };
  const removeDigit = (remove: number) => {
    setDigits((state) => state.filter((dig) => dig !== remove));
  };
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='container'>
      <h1>Select digits to grate a sum</h1>
      <form>
        <label htmlFor="digits">Digits: </label>
        <select onChange={selectDigit} name="digits" id="digits">
          {digits.length === 0 && <option>Select digit</option>}
          {options.map((dig, idx) => (
            <option key={idx} disabled={digits.includes(dig)} value={dig}>
              {dig}
            </option>
          ))}
        </select>
      </form>
      <h3>Sum:</h3>
      <span>{digits.reduce((sum, dig) => (sum += dig), 0)}</span>
      <h3>Selected digits:</h3>
      <div>
        {digits.length === 0 ? (
          <span>you have no selected any digits</span>
        ) : (
          digits.map((dig, idx) => (
            <button
              key={idx}
              onClick={() => removeDigit(dig)}
            >{` ${dig} x `}</button>
          ))
        )}
      </div>
    </div>
  );
}

export default Sum;
