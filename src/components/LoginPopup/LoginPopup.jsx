import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { Password } from '@mui/icons-material';
import { StoreContext } from '../../context/StoreContext';

const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setcurrentState] = useState('Login');

    const { token, updateToken } = useContext(StoreContext)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        Password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (currentState === 'Login') {
            updateToken('token', formData.email);
            updateToken('name', formData.email);
            console.log(token.token)
        }

        setShowLogin(false)

    };



    return (
        <div className='login-popup'>
            <form className='login-popup-container' onSubmit={(e) => handleSubmit(e)}>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => { setShowLogin(false) }} src={assets.cross_icon} alt="" srcset="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <><input type="text" name="fname" placeholder='Your Name' required onChange={(e) => handleChange(e)} /> <input type="text" name="mobile" placeholder='Mobile number' required onChange={(e) => handleChange(e)} /></>}

                    <input type="email" name="email" placeholder='Your Email' required onChange={(e) => handleChange(e)} />
                    <input type="password" name="password" placeholder='Password' required onChange={(e) => handleChange(e)} />
                </div>
                <button className='bg-red-800 rounded text-white hover:bg-red-700 w-full h-10'>{currentState === 'Sign Up' ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the thems of use & privacy policy</p>
                </div>
                <div className="login-popup-reaction">
                    {currentState === "Login"
                        ? <p>Create a new account ? <span onClick={() => setcurrentState("Sign Up")}>Click Here</span></p>
                        : <p>Alredy have and account <span onClick={() => setcurrentState("Login")}>Login here</span></p>
                    }
                </div>
            </form>
        </div>
    )
}

export default LoginPopup
