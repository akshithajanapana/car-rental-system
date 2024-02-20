import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useLocation, useNavigate } from 'react-router-dom';
 
const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        
        });
    }
   
    return(
        <>
            <nav className='text-white'>
                <p>
                    Welcome  Test 1
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </nav>
        </>
    )
}
 
export default Home;