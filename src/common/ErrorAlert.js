import React from 'react';

function ErrorAlert({alertType = "danger", errs }) {
  return (
    <div className={`alert alert-${alertType} d-flex align-items-center justify-content-center`} role="alert">
      {errs.map(err => (
        <p key={err}>
          {err}
        </p>
      ))}
    </div>
  );
}

export default ErrorAlert;