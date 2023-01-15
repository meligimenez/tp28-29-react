import React from 'react';
import PropTypes from 'prop-types';

export function Genre({ name }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">
          {name}
        </div>
      </div>
    </div>
  )
}

export default Genre

Genre.defaultProps = {
  name: "Accion",
};

Genre.propTypes = {
  name: PropTypes.string.isRequired,
};