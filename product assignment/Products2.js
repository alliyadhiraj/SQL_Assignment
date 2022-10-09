import React,{Component} from 'react';

class Products extends Component{

    constructor(props){
        super(props);
        this.state = {
            cart: 0,
            products: [
                {
                    id: 101,
                    name: "product 1",
                    quantity: 0
                },
                {
                    id: 102,
                    name: "product 2",
                    quantity: 0
                },
                {
                    id: 103,
                    name: "product 3",
                    quantity: 0
                }
            ]
        }
    }

    render(){
        return(
            <div>
                {this.state.products.length != 0? <div>
                    {this.state.products.map(item => {
                        return (<div>
                            <h3>{item.name} : {item.quantity}</h3> 
                            <button>ADD</button>   
                            <button>Remove</button>
                        </div>);
                    } )}
                </div>:<h1>Product list is empty</h1>}
            </div>
        );
    }

}

export default Products;