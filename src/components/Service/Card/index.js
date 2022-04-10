import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServiceCard = ({ card }) => {
  const { icon, title, description } = card;
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className="card">
        <div className="card-body">
          <div>
            <FontAwesomeIcon icon={icon} className="rounded-circle border border-1 border-grey p-2" />
          </div>
          <h5 className="text-bold-500 my-3">
            {title}
          </h5>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
};

export default ServiceCard;
