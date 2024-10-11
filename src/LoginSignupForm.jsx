import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginSignupForm.css'; // Import the CSS file for styles

const LoginSignupForm = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Used for signup only
    const [message, setMessage] = useState('');
    const emailRef = useRef(null); // Ref for email input
    const navigate = useNavigate(); // To handle navigation

    useEffect(() => {
        if (isLogin) {
            emailRef.current.focus(); // Automatically focus the email input on load
        }
    }, [isLogin]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin 
            ? 'http://localhost:5000/login' 
            : 'http://localhost:5000/signup'; // Include the full URL
    
        const payload = isLogin
            ? { email, password }
            : { name, email, password };
    
        try {
            const response = await axios.post(endpoint, payload);
            // Check for successful signup status
            if (response.status === 201) {  // Change this to 201 for signup success
                setMessage('Signup successful!'); // Set the success message
                navigate('/'); // Navigate to home page on success
            } else if (response.status === 200) { // Handle login response
                setMessage('Login successful!');
                navigate('/'); // Navigate to home page on success
            }
        } catch (error) {
            console.error(error); // Log the error for debugging
            setMessage('Error: ' + (error.response?.data?.message || 'Something went wrong.'));
        }
    };
    
    
    
    

    return (
        <div className="auth-container d-flex justify-content-center align-items-center vh-100">
            <div className="card-container">
                <div className={`card p-4 ${isLogin ? 'login' : 'signup'}`} style={{ width: '400px', backgroundColor: '#444', border: 'none', borderRadius: '10px' }}>
                    <div className={`form-content ${isLogin ? 'front' : 'back'}`}>
                        <h2 className="text-center text-white">{isLogin ? 'Login' : 'Sign Up'}</h2>
                        <form onSubmit={handleSubmit}>
                            {!isLogin && (
                                <div className="mb-3">
                                    <label className="form-label text-white">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required={!isLogin}
                                        style={{ backgroundColor: '#555', color: '#fff', border: 'none' }}
                                    />
                                </div>
                            )}
                            <div className="mb-3">
                                <label className="form-label text-white">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    ref={emailRef} // Attach the ref to the email input
                                    style={{ backgroundColor: '#555', color: '#fff', border: 'none' }}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{ backgroundColor: '#555', color: '#fff', border: 'none' }}
                                />
                            </div>
                            <button type="submit" className="btn" style={{ backgroundColor: '#ff5722', color: '#fff', width: '100%' }}>
                                {isLogin ? 'Login' : 'Sign Up'}
                            </button>
                        </form>

                        {/* Success or error message */}
                        {message && <p className="text-danger text-center mt-2">{message}</p>}

                        <button 
                            onClick={() => setIsLogin(!isLogin)} 
                            className="btn btn-link w-100 mt-3" 
                            style={{ color: '#ff5722' }}
                        >
                            {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignupForm;
