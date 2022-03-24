import clasess from "./Modal.module.css"
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = props => {
    return <div className={clasess.backdrop}  onClick={props.onClose}/>
}

const ModalOverlay = (props) => {
  return (
    <div className={clasess.modal}>
      <div className={clasess.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {ReactDom.createPortal( <Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDom.createPortal( <ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>

};

export default Modal;