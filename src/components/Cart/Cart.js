import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemove = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAdd = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartitems = <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => {
                return <CartItem 
                    onRemove={cartItemRemove.bind(null, item.id)} 
                    onAdd={cartItemAdd.bind(null, item)} 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                />;
            })}
        </ul>;

    return (
        <Modal onShowCart={props.onShowCart}>
            {cartitems}
            <div className={classes.total}>
                <span>
                    Total Amount
                </span>
                <span>
                    {totalAmount}
                </span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onShowCart} className={classes['button--alt']}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;