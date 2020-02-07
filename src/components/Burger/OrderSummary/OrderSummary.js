import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button';
const orderSummary = (props)=>{
    const ingredientsSummary = Object.keys(props.ingredients).map(igKey =>{
        return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
            
        )
    });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delecious Burger with Following Ingredients:</p>
            <ul>
                {ingredientsSummary}

            </ul>
   <strong> <p>Total Price Rs: {props.price}</p></strong>
            <p>Continue to checkout</p>
            
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
            </Aux>


    );

};
export default orderSummary;