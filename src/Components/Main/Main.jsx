import "./main.css";
import currencys from "../../assets/currency";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faDownLong, faUpLong);

const Main = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondeValue, setSecondeValue] = useState(0);
  const [firstCurrency, setFirstCurrency] = useState("EUR");
  const [secondeCurrency, setSecondeCurrency] = useState("USD");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const currencysName = Object.keys(currencys);

  const handleChange = (set, e) => {
    set(e.target.value);
  };
  const converte = (
    currencyTarget,
    valueCurrency,
    setTargetCurrencyValue,
    e
  ) => {
    console.log("OK", currencyTarget, valueCurrency);

    console.log(e.target.value);
    const result = (e.target.value * currencyTarget) / valueCurrency;
    console.log(result);
    setTargetCurrencyValue(result);
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>currency 1</legend>
        <input
          type="number"
          value={firstValue}
          onChange={(event) => handleChange(setFirstValue, event)}
          onKeyUp={(event) =>
            converte(
              currencys[secondeCurrency],
              currencys[firstCurrency],
              setSecondeValue,
              event
            )
          }
        />
        <select
          value={firstCurrency}
          onChange={(event) => {
            handleChange(setFirstCurrency, event);
          }}
        >
          {currencysName.map((currency, index) => {
            return (
              <option value={currency} key={index + currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </fieldset>
      <div>
        <FontAwesomeIcon icon={faDownLong} className="arrow" />
        <FontAwesomeIcon icon={faUpLong} className="arrow" />
      </div>
      <fieldset>
        <legend>currency 2</legend>
        <input
          type="number"
          value={secondeValue}
          onChange={(event) => handleChange(setSecondeValue, event)}
          onKeyUp={(event) =>
            converte(
              currencys[firstCurrency],
              currencys[secondeCurrency],
              setFirstValue,
              event
            )
          }
        />

        <select
          value={secondeCurrency}
          onChange={(event) => {
            handleChange(setSecondeCurrency, event);
          }}
        >
          {currencysName.map((currency, index) => {
            return (
              <option value={currency} key={index + currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </fieldset>
    </form>
  );
};

export default Main;
