import React, { Component } from "react"
import '../style/button.css'
import '../style/vendingButton.css'


   const VendingButton = ({ item }) => {
        return (
           <div Col lg={4} className="float-left"><button className="btn7" >
                <p className="itemId">{item.id}</p>
                <p className="itemName">{item.name}</p>
                <p className="itemPrice">${item.price}</p>
                <p className="itemQuantity">Quantity Left: {item.quantity}</p>
            </button></div>
        );
    }
    
    class Vending extends React.Component {
           // this static property will initialize a prop with data
        // if it hasn't been provided by the parent component
        static defaultProps = {
            items: [
                {
                    "id": 1,
                    "name": "Dog Plush",
                    "price": "4.00",
                    "quanity": "5",
                },
                {
                    "id": 2,
                    "name": "Engineer Notebook",
                    "price": "10.00",
                    "quanity": "15",
                }
            ]
        }
    
        render() {
            // Here is a debug method to monitor incoming contact data
            console.log("Rendering Vending items:")
            console.log(this.props.items)
            return (
                <p>
                {this.props.items.map((item, i) => {
                        return <VendingButton item={item} key={i} />
                    })}
                </p>
            )
  
        }
    }

export default Vending