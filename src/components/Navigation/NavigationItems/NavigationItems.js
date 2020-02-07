import React from 'react';
import classes from './NavigationItems.module.css'
import Navigationitem from './NavigationItem/NavigationItem'
const navigationitems = (props)=>(
<ul className={classes.NavigationItems}>
    <li>
        <Navigationitem link="/" active>Burger Builder</Navigationitem>
        <Navigationitem link="/">CheckOut</Navigationitem>
    </li>
</ul>
);
export default navigationitems;