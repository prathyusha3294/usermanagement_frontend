import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import './CustomerProfile.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const CustomerProfile = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    dial_code: 'Spain',
    phone_number: '',
    title: '',
    biography: '',
  });
  const [companyLogo, setCompanyLogo] = useState(null); // To store the selected file

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCompanyLogo(URL.createObjectURL(file)); // Preview uploaded image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="customer-profile-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="profile-form-container">
        <h2 className="profile-heading">Customer Profile</h2>

        {/* Profile Picture Section */}
        <div className="profile-picture-section">
          <div className="profile-picture-wrapper">
            <img
              src={companyLogo || 'https://via.placeholder.com/150'} // Default placeholder if no logo
              alt="Company Logo"
              className="profile-picture"
            />
          </div>
          <input
            type="file"
            id="file-input"
            name="company_logo"
            accept="image/*"
            onChange={handleFileChange}
          />
          <label htmlFor="file-input" className="upload-logo-btn">
            {companyLogo ? 'Change Logo' : 'Upload Logo'}
          </label>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="profile-form">
          <h3 className="section-heading">
            <FontAwesomeIcon icon={faUser} /> Basic Details
          </h3>
          <label>
            <input
              type="text"
              name="company_name"
              placeholder="Enter company name"
              value={formData.company_name}
              onChange={handleChange}
            />
          </label>

          <h3 className="section-heading">
            <i className="fas fa-address-card"></i> Primary Contact
          </h3>
          <label>
            Contact Name:
            <input
              type="text"
              name="contact_name"
              placeholder="Enter contact name"
              value={formData.contact_name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <div className="form-group">
            <label>
              Dial Code:
              <select name="dial_code" value={formData.dial_code} onChange={handleChange} className="dial-code">
                <option value="Spain">Spain</option>
                <option value="USA">USA</option>
              </select>
            </label>

            <label>
              Phone Number:
              <input
                type="text"
                name="phone_number"
                placeholder="Enter phone number"
                value={formData.phone_number}
                onChange={handleChange}
                className="phone-number"
              />
            </label>
          </div>

          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="e.g., Golang Developer"
              value={formData.title}
              onChange={handleChange}
            />
          </label>

          <label>
            Biography (optional):
            <textarea
              name="biography"
              placeholder="Describe yourself (max 200 characters)"
              maxLength="200"
              value={formData.biography}
              onChange={handleChange}
            />
          </label>

          <div className="form-actions">
            <button type="button" className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerProfile;
