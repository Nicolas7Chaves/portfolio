import "./Modal.scss"
function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-content__layout">
                    <div className="modal-content__text">{children}</div>
                    <button className="modal-content__button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
export default Modal;
