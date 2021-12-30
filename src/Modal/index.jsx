import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import {FaWindowClose} from "react-icons/fa";

const Modal = ({ isOpen, onClose, image}) => {
  if (!isOpen) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  if (isOpen) {
    return createPortal(
      <div className="StyledModalOverlay">
        <div className="StyledModalHeader">
          <FaWindowClose color="red" size="32px" onClick={onClose} />
        </div>
        <div className="StyledModalBody">
          <img src={image} alt="" />
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }
  return null;
};

export default Modal;
