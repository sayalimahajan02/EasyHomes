import './Paypal.scss';
import React from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

class Paypal extends React.Component {
    render() { 
       const createOrder = (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "0.01",
                  },
                },
              ],
            });
          }
      const onApprove = (data, actions) => {
            return actions.order.capture();
          }
		return (
			<div className= "button">
        <div className = "wrapper">
        <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
		  </div>
    </div>
		)
	}
}

export default Paypal;