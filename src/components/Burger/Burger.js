import React from 'react';
import { createComponent } from 'react-fela';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const Burger = createComponent(
    () => ({
        width: "100%",
        margin: "auto",
        height: "250px",
        overflow: "scroll",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.2rem",
        '@media (min-width: 500px) and (max-height: 400px)': {
            width: "350px",
            height: "300px"
        },
        '@media (min-width: 500px) and (min-height: 401px)': {
            width: "450px",
            height: "250px"
        },
        '@media (min-width: 1000px) and (min-height: 700px)': {
            width: "500px",
            height: "500px"
        }
    }),
    "div"
);

const burger = ( props ) => {
    let transformedIngredients = Object.keys(props.ingredients)//create array from an object
            .map(ingredientKey => {//loop over the element
                return [...Array(props.ingredients[ingredientKey])]//return  created array with amount of the same element into prev array 
                .map((_, i) => {//loop over those elements and pass unique key and type
                    return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
                });
            })
            .reduce((arr, el) => {
                // console.log('element:', el)
                console.log(arr.concat(el));
                return arr.concat(el)
            }, []);

            if(transformedIngredients.length === 0) {
                transformedIngredients = <p>Please start adding ingredients</p>
            }

    return (
        <Burger className="burger" data-test="burger">
            <BurgerIngredient type="bread-top"  />
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </Burger>
    );
}

export default burger;