import React from "react"

const WeddingModal = ({ modalClass, onRvspRespClick }) => {
  return (
    <div className={modalClass}>
      <div className="modal-dialog modal-dialog-centered text-black">
        <div className="modal-content p-3">
          <div className="modal-body mt-4">
            <h1>- WIP -</h1>
          </div>
          <div className="modal-footer border-top-0 justify-content-center">
            <button type="button" className="btn btn-secondary btn-rvsp" data-bs-dismiss="modal" onClick={() => onRvspRespClick('close')}>Close</button>
            {/* <button type="button" className="btn btn-dark btn-rvsp" onClick={() => onRvspRespClick('save')}>Save changes</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeddingModal