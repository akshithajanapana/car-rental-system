import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth} from '../firebase';
import { NavLink, useNavigate, } from 'react-router-dom'
import car from "../assets/car.jpeg";
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
           navigate("/home");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main className='text-white'>        
        <div >
            <div className='flex w-[100vw] h-[100vh]'>
                <div className='w-[60%] h-[100%]'>
                    <img src={car} alt="" className='h-[100%]' />
                </div>
                <div className='h-[100%] p-8'>                  
                    <h1 className='text-3xl font-bold'> SignIn </h1>   
                    <span>Login to access the application</span>                                                                         
                    <form>                                                                                            
                        <div className='flex flex-col mt-6'>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"  
                                className='bg-transparent border-gray-50 rounded-sm border-2 p-2'                              
                            />
                        </div>

                        <div className='flex flex-col mt-6'>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"  
                                className='bg-transparent border-gray-50 rounded-sm border-2 p-2'            
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onLogin}   
                            className='mt-8 bg-white text-black px-5 py-1 rounded-sm w-[50%]'                     
                        >  
                            Sign In                               
                        </button>
                                                                     
                    </form>
                   
                    <p className='mt-4'>
                        Don't have an account?{' '}
                        <NavLink to="/signup" className="border-b-2 border-gray-50" >
                            Sign Up
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </div>
    </main>
        </>
    )
}
 
export default Login