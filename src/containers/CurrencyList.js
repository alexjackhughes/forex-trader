import React, { Component } from "react";
import { connect } from "react-redux";

import CurrencyItem from "../components/CurrencyItem";

class CurrencyList extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.currencies.map(currency => {
          return (
            <CurrencyItem
              key={currency.key}
              flag={this.props.flags[currency.key]}
              currency={currency}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    flags: state.flag.rates
  };
};

export default connect(mapStateToProps)(CurrencyList);
