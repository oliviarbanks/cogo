import { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);    
  
      const handleSubmit = async (e) => {
    e.preventDefault();


    try {

      if (response.ok) {
        setSuccess('Password reset instructions sent! Please check your email.');
        setEmail(''); 
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } catch (error) {
      setError(error.message);
    }
      };
    
    return (
      <div >
      <h2>Forgot Password</h2>
      {error && <div>{error}</div>}
      {success && <div >{success}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Send Reset Instructions</button>
      </form>
    </div>
  )
}

export default ForgotPassword