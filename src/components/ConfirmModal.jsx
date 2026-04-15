import React from "react";

const ConfirmModal = ({
  show,
  title = "Confirm Action",
  message = "Are you sure?",
  onConfirm,
  onCancel,
}) => {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                className="btn-close"
                onClick={onCancel}
              ></button>
            </div>

            <div className="modal-body">
              {message}
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>

              <button
                className="btn btn-danger"
                onClick={onConfirm}
              >
                Confirm
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* backdrop */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default ConfirmModal;