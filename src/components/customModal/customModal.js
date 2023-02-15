import React ,{useState} from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import '../customModal/customModal.css'


function CustomModal(props) {
    

    return (

            <Modal
                open={props.modalOpen}
                showCloseIcon={props.showCloseIcon}
            >
                <h5 className="headingModal">{props.title}</h5>
          <p className="headingModal2">
{props.messageFromWeb}
                </p>
                <div className="buttonDiv">
                    <button onClick={props.onModalClose} className="modalButton">{props.buttonTitle}</button>
                    </div>
        </Modal>

    );

}
export default CustomModal;

