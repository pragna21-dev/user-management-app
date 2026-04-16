import { useState } from "react";

const UserFormModal = ({ show, onClose }) => {
  const cities = [
    "Gwenborough",
    "Wisokyburgh",
    "McKenziehaven",
    "South Elvis",
    "Roscoeview",
    "South Christy",
    "Howemouth",
    "Aliyaview",
    "Bartholomebury",
    "Lebsackbury",
  ];

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
    street: "",
    company: "",
    phone: "",
    website: "",
    gender: "",
  });
  console.log("show:", show);

  if (!show) return null;
  return (
    <>
      <div className="modal show fade d-block">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Add user</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    name="name"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="userName"
                    className="form-control"
                    placeholder="UserName"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>

                <div className="col-md-6">
                  <select name="city" className="form-select">
                    <option value="">Select City</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <input
                    name="street"
                    className="form-control"
                    placeholder="Street"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="company"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="website"
                    className="form-control"
                    placeholder="Website"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Gender: </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                    />
                    <label className="form-check-label" for="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="Female"
                      value="Female"
                    />
                    <label className="form-check-label" for="Female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserFormModal;
