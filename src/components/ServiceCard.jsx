import React from 'react';

function ServiceCard({ title, description, IconComponent }) {
  return (
    <div className="card h-100 bg-dark text-light shadow-sm">
      <div className="card-body d-flex align-items-start">
        {/* Render the icon component on the left side */}
        {IconComponent && (
          <div className="me-3" >
            <IconComponent sx={{ fontSize: '2rem', color: '#fa880c' }}/>
          </div>
        )}
        <div className="flex-grow-1">
          <h5 className="card-title fw-semibold fs-4" style={{ color: '#fa880c' }}>{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
