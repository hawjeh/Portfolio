import React from "react"

const Shareaholic = ({ center }) => {

  const customClass = center ? 'w-100 d-flex justify-content-center' : 'mt-5';

  return (
    <div className={customClass}>
      <div className="shareaholic-canvas" data-app="share_buttons" data-app-id="33100428"></div>
    </div>
  )
}

export default Shareaholic