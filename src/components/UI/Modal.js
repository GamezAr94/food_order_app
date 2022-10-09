import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div onClick={props.onShowCart} className={classes.backdrop} />
};

const ModalOverlay = props => {
    return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onShowCart={props.onShowCart} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
};

export default Modal;