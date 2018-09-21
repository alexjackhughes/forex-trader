import React from "react";

export default ({ currency, flag }) => {
  return (
    <div class="box">
      <div class="column">
        <img src={flag.flag} alt={flag.name} className="flag" />
      </div>
      <h3 class="currency-ticket">{currency.key}</h3>
      <p class="currency-name">{flag.name}</p>
      <p class="currency-value">{currency.value}</p>
    </div>
  );
};
