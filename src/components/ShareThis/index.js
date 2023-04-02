import React from "react"

const ShareThis = ({ center }) => {

  const customClass = center ? 'w-100 d-flex justify-content-center' : 'mt-5';

  return (
    <div className={customClass}>
      <div className="sharethis-inline-share-buttons"></div>
    </div>
  )
}

export default ShareThis