export function fetchCurrencies() {
  // Instead of plain objects, we are returning function.
  return function(dispatch) {
    // Dispatching REQUEST action, which tells our app, that we are started requesting todos.
    dispatch({
      type: "FETCH_CURRENCIES_REQUEST"
    });
    return (
      fetch(
        "http://data.fixer.io/api/latest?access_key=9fdfe9dfa8e2880ca7d4672a7d9b0c65&format=1"
      )
        // Here, we are getting json body(in our case it will contain `todos` or `error` prop, depending on request was failed or not) from server response
        // And providing `response` and `body` variables to the next chain.
        .then(response => response.json().then(body => ({ response, body })))
        .then(({ response, body }) => {
          if (!body.success) {
            // If request was failed, dispatching FAILURE action.
            dispatch({
              type: "FETCH_CURRENCIES_FAILURE"
            });
          } else {
            // When everything is ok, dispatching SUCCESS action.
            dispatch({
              type: "FETCH_CURRENCIES_SUCCESS",
              rates: body.rates
            });
          }
        })
    );
  };
}
