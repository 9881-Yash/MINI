import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(paymentMethod || 'PayPal');

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };

  return (
    <div className="container">
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="small-container">
      <div className="text-centre" style={{ margin: "30px 0 50px 0" }}>
        <h2>Payment Method</h2>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/line_star.png"}
        ></img>
      </div>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="PayPal"
                className="form-check-input"
                value="PayPal"
                checked={paymentMethodName === 'PayPal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="PayPal" className="form-check-label">
                PayPal
              </label>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="Stripe"
                className="form-check-input"
                value="Stripe"
                checked={paymentMethodName === 'Stripe'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="Stripe" className="form-check-label">
                Stripe
              </label>
            </div>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}
