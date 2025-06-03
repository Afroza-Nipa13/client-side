import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loader/Loading';

const PrivetProvider = ({children}) => {
  const {user,loading} = useContext(AuthContext)
  const location = useLocation()
console.log(loading)
  if(loading){

    return <Loading></Loading>
  }

  if(!user){

    return <Navigate to='/signin' state={location.pathname}></Navigate>
  }



    return children;
};

export default PrivetProvider;