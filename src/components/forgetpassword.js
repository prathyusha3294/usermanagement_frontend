// import React, { useState } from 'react';

// function ForgetPassword() {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/forget_password/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           otp,
//         }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setSuccess('OTP sent successfully!');
//         setError('');
//       } else {
//         setError(data.message || 'Failed to send OTP');
//         setSuccess('');
//       }
//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//       setSuccess('');
//     }
//   };

//   return (
//     <div>
//       <h2><center>Forget Password</center></h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>OTP</label>
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         {success && <p style={{ color: 'green' }}>{success}</p>}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ForgetPassword;

import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
  const [step, setStep] = useState(1); // Step state to track current step
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Request OTP when the user submits their email
  const requestOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/forget_password/', { email });
      setStep(2); // Move to the OTP verification step
      setError('');
      setSuccess('OTP has been sent to your email. Please check your inbox.');
    } catch (error) {
      setError('Failed to send OTP. Please check your email.');
      setSuccess('');
    }
  };

  // Verify OTP and allow password reset
  const verifyOtpAndResetPassword = async (e) => {
    e.preventDefault();

    // Check if new passwords match
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/forgetpasswordverify/', {
        email,
        otp,
        // current_password: currentPassword,
        new_password: newPassword,
      });

      setSuccess(response.data.message);
      setError('');
      // Optionally reset the fields here
      setEmail('');
      setOtp('');
    //   setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setError('Failed to reset password. Please check your input.');
      setSuccess('');
    }
  };

  return (
    <div>
      {step === 1 && (
        <form onSubmit={requestOtp}>
          <h2>Request OTP</h2>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send OTP</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={verifyOtpAndResetPassword}>
          <h2>Verify OTP and Reset Password</h2>
          <div>
            <label>OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          {/* <div>
            <label>Current Password:</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div> */}
          <div>
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm New Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      )}

      {/* Display success or error message */}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ForgetPassword;
