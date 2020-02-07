import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';
const controls = [
{label:'Salad',type:'salad'},
{label:'Meat',type:'meat'},
{label:'Bacon',type:'bacon'},
{label:'Cheese',type:'cheese'}
];
const buildControls = (props)=>(
    <div className ={classes.BuildControls}>
        <p>Current price : <strong>Rs.{props.price}</strong></p>
        {controls.map((ctrl)=>(
            <BuildControl key={ctrl.label} label={ctrl.label}
            added={()=>props.ingredientAdded(ctrl.type)}
            removed={()=>props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton} onClick={props.ordered} disabled = {!props.purchaseable}>ORDER NOW</button>

    </div>
);
export default buildControls;