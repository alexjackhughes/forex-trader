import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions";

import CurrencyList from "./CurrencyList";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  convertObjectToArray(rates) {
    return Object.entries(rates).map(([key, value]) => ({
      key,
      value
    }));
  }

  render() {
    return (
      <div class="container">
        <header>
          <nav>
            <div id="logo">
              <strong>FOREX TRADER</strong>
            </div>
          </nav>
          <button onClick={() => this.props.getData()} class="refresh-button">
            <strong>COMPARED TO €</strong>
          </button>
        </header>
        <CurrencyList
          currencies={this.convertObjectToArray(this.props.rates)}
        />
        <footer>
          <nav>
            <div class="siteinfo">
              Made with love by{" "}
              <a href="https://medium.com/@alexjackhughes/">
                <strong>Alex Hughes</strong>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rates: state.currency.rates
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(fetchCurrencies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
