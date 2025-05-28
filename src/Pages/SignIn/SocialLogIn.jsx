import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthContext';
import { useNavigate } from 'react-router';

const SocialLogIn = ({from}) => {
   const {signInGoogle}= use(AuthContext)
   const navigate = useNavigate(); 
   
 const handleGoogleSignIn=()=>{
    signInGoogle().then(result=>{
        console.log(result)
        navigate(from || '/')

    }).catch(error =>{
        console.log(error.message)
    })
 }  
    return (
        <div>
           <button onClick={handleGoogleSignIn} className='btn w-full'><FcGoogle/>Sign In with Google</button> 
        </div>
    );
};

export default SocialLogIn;