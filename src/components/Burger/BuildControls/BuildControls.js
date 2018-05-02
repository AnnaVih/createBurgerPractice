import React from 'react';
import { createComponent } from 'react-fela';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},        
];

const BuildControls = createComponent(
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
    <BuildControls>
        {controls.map(ctrl => {
            return <BuildControl key={ctrl.label} label={ctrl.label}/>
        })}
    </BuildControls>
);

export default buildControls;