import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_unfxtBJqBsFUJaa8ZJnJ9tSY00NhVDvc23";
  const onToken = token => {
    console.log(token);
    alert("Paymnet Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothin"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
