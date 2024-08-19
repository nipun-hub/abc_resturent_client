// import React, { useContext, useState } from 'react'
// import './LoginPopup.css'
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../context/StoreContext';
// import toast, { Toaster } from 'react-hot-toast';
// import axios from 'axios';

// const LoginPopup = ({ setShowLogin }) => {

//     const [currentState, setCurrentState] = useState('Login');

//     const { token, updateToken } = useContext(StoreContext)

//     const [formData, setFormData] = useState({
//         fullName: "",
//         email: "",
//         address: "",
//         phone: "",
//         password: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const errorHandle = (data) => {
//         // toast.error(data.)
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (currentState == 'Sign Up') {
//             console.log('Sending formData:', formData);
//             axios.post('http://localhost:8080/api/user/register', formData)
//                 .then(response => {
//                     console.log(response)
//                 })
//                 .catch((error) => {
//                     console.log(error.response.data)
//                 })
//         }

//         setShowLogin(false)

//     };

//     const notify = () => toast.success('Here is your toast.');




//     return (
//         <div className='login-popup'>
//             <form className='login-popup-container' onSubmit={(e) => handleSubmit(e)}>
//                 <div className="login-popup-title">
//                     <h2>{currentState}</h2>
//                     <img onClick={() => { setShowLogin(false) }} src={assets.cross_icon} alt="" srcset="" />
//                 </div>
//                 <div className="login-popup-inputs">
//                     {currentState === "Login"
//                         ? <></>
//                         : <>
//                             <input type="text" name="fullName" placeholder='Your Name' required onChange={(e) => handleChange(e)} />
//                             <input type="text" name="phone" placeholder='Mobile number' required onChange={(e) => handleChange(e)} />
//                             <input type="text" name="address" placeholder='Address' required onChange={(e) => handleChange(e)} />
//                         </>}

//                     <input type="email" name="email" placeholder='Your Email' required onChange={(e) => handleChange(e)} />
//                     <input type="password" name="password" placeholder='Password' required onChange={(e) => handleChange(e)} />
//                 </div>
//                 <button className='bg-red-800 rounded text-white hover:bg-red-700 w-full h-10' >{currentState === 'Sign Up' ? "Create account" : "Login"}</button>
//                 <div className="login-popup-condition">
//                     <input type="checkbox" required />
//                     <p>By continuing, i agree to the them of use & privacy policy</p>
//                 </div>
//                 <div className="login-popup-reaction">
//                     {currentState === "Login"
//                         ? <p>Create a new account ? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p>
//                         : <p>Already have and account <span onClick={() => setCurrentState("Login")}>Login here</span></p>
//                     }
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default LoginPopup
