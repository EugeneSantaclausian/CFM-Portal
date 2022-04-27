import React from "react";

export default function RegistrationForm() {
  return (
    <div>
      <form className="row g-3 pt-3">
        {/*BIO*/}
        <div className="col-md-6">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" aria-label="First name" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" aria-label="Last name" />
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            aria-label="Place of Birth"
          />
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className="form-label">Place of Birth</label>
          <input
            type="text"
            className="form-control"
            aria-label="Place of Birth"
          />
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className="form-label">Hometown</label>
          <input type="text" className="form-control" aria-label="Hometown" />
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className="form-label">Marital Status</label>
          <select id="inputState" className="form-select">
            <option defaultValue={"Choose..."}>Married</option>
            <option>Single</option>
          </select>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className="form-label">Employment Status</label>
          <select id="inputState" className="form-select">
            <option defaultValue={"Choose..."}>Employed</option>
            <option>Unemployed</option>
          </select>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className="form-label">Nature of Work</label>
          <input type="text" className="form-control" aria-label="Work" />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <label className="form-label">Next of Kin</label>
          <input type="text" className="form-control" aria-label="Work" />
        </div>
        {/*BIO*/}

        <div className="col-lg-6 col-md-12 col-sm-12">
          <label htmlFor="inputAddress" className="form-label">
            Residential Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <label htmlFor="inputAddress2" className="form-label">
            Postal Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="P.O.Box 111"
          />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className="form-label">Telephone</label>
          <input type="number" className="form-control" />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option defaultValue={"Choose..."}>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
