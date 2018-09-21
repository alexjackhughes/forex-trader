import React from "react";

export default ({ currency, flag }) => {
  return (
    <div className="box">
      <div className="column">
        <img src={flag.flag} alt={flag.name} className="flag" />
      </div>
      <h3 className="currency-ticket">{currency.key}</h3>
      <p className="currency-name">{flag.name}</p>
      <p className="currency-value">{currency.value}</p>
    </div>
  );
};
