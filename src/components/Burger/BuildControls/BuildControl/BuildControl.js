import React from 'react';
import { createComponent } from 'react-fela';

const BuildControl = createComponent(
    () => ({
        display: "flex",
        justifyContent: "space-between",
        margin: "5px 0",
        alignItems: "center"
    }),
    "div"
);

const BuildControlBtn = createComponent(
    () => ({
        display: "block",
        font: "inherit",
        padding: "0 5px",
        width: "80px",
        border: "1px solid #AA6817",
        cursor: "pointer",
        outline: "none",
        ":hover": {
            ":disabled": {
                backgroundColor: "#AC9980",
                color: "#ccc",
                cursor: "not-allowed"
            }
        },
        ":disabled": {
            backgroundColor: "#AC9980",
            border: "1px solid #7E7365",
            color: "#ccc",
            cursor: "default"
        }
    }),
    "button"
);

const Label = createComponent(
    () => ({
        padding: "10px",
        fontWeight: "bold",
        width: "80px"
    }),
    "div"
);

const LessBtn = createComponent(
    () => ({
        backgroundColor: "#D39952",
        color: "white",
        ":hover, :active": {
            backgroundColor: "#DAA972",
            color: "white"
        }
    }),
    "button"
);

const MoreBtn = createComponent(
    () => ({
        backgroundColor: "#8F5E1E",
        color: "white",
        ":hover, :active": {
            backgroundColor: "#99703F",
            color: "white"
        }
    }),
    "button"
);


const buildControl = (props) => (
    <BuildControl>
        <Label>{props.label}</Label>
        <button onClick={props.removed} 
                disabled={props.disabled}>Less</button>
        <button onClick={props.added}>More</button>
    </BuildControl>
)


export default buildControl;