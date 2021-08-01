exports.handler = async function (event, context) {
  if (e.body) {
    const { cart, shippingFee, totalAmount } = JSON.parse(e.body);
    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  }
  return {
    statusCode: 200,
    body: "Create Payment intent",
  };
};

//domain/.netlify/functions/create-payment-intent
