import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const clearBasket = () => {
    dispatch({
      type: "CLEAR_BASKET",
    });
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={clearBasket}>Clear the Cart</button>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
