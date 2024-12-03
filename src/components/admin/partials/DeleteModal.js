import React from 'react';

const ConfirmDeleteModal = ({ show, onClose, onConfirm, vendorName }) => {
  return (
    <div
      className={`modal fade ${show ? 'show' : ''}`}
      tabIndex="-1"
      aria-labelledby="deleteVendorModalLabel"
      aria-hidden="true"
      style={{ display: show ? 'block' : 'none' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteVendorModalLabel">
              Delete Action
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete <strong>{vendorName}</strong>?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              No, Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onConfirm}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
