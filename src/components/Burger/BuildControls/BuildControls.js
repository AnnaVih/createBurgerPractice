import React from 'react';
import { createComponent } from 'react-fela';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},        
];

const BuildControlStyles = createComponent(
    () => ({
        width: "100%",
        margin: "auto",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        padding: "10px 0",
        backgroundColor: "#CF8F2E"
    }),
    "div"
);

const buildControls = ( props ) => (
    <BuildControlStyles>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            console.log(ctrl.type);
            return <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label}
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredientRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                        />
        })}
        <button disabled={!props.purchasable}
                onClick={props.ordered}
        >  ORDER NOW </button>
    </BuildControlStyles>
);

export default buildControls;