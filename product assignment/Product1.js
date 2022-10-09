import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0,
      product: [
        {
          id: 1,
          name: "laptop",
          quan: 0,
          price: 20000,
        },
        {
          id: 2,
          name: "Mobile",
          quan: 0,
          price: 10000,
        },
        {
          id: 3,
          name: "Tab",
          quan: 0,
          price: 30000,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.product.length != 0 ? (
          <div>
            {this.state.product.map((item) => {
              return (
                <div>
                  <h3>{item.name}</h3>
                  <h4>
                    Quantity :{item.quan} <br /> Price :{item.price} <br />{" "}
                    Total:
                    {item.quan * item.price}
                  </h4>
                  <button>ADD</button>
                  <button>Remove</button>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>Empty he cart</h1>
        )}
      </div>
    );
  }
}
