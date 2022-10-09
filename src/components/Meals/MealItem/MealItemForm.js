import React, {useRef, useState} from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const MAX_QTY = 5;
    const MIN_QTY = 1;
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < MIN_QTY || enteredAmount > MAX_QTY) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>``
            <Input
                ref={amountInputRef} 
                label="Amount" input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: MIN_QTY,
                    max: MAX_QTY,
                    step: '1',
                    defaultValue: '1'
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount ({`${MIN_QTY} - ${MAX_QTY}`})</p>}
        </form>
    );
};

export default MealItemForm;