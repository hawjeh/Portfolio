import React from "react"

const WeddingModal = ({ modalClass, onCloseClick, saveText = "Save", onSaveClick, bigModal = true, showSave = false, children }) => {
  return (
    <div className={modalClass}>
      <div className={`modal-dialog modal-dialog-centered text-black ${bigModal ? "modal-lg" : ""}`}>
        <div className="modal-content">
          <div className="modal-body mt-4 ps-0 pe-0 pb-0">
            {children}
          </div>
          <div className="modal-footer border-top-0 justify-content-center">
            {
              showSave && <button type="button" className="btn btn-dark btn-rsvp" onClick={onSaveClick}>{saveText}</button>
            }
            <button type="button" className="btn btn-secondary btn-rsvp" data-bs-dismiss="modal" onClick={onCloseClick}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeddingModal