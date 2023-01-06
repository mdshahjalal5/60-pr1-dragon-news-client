import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    
    console.log(user)
    if((loading, user?.uid)){
        return <h2>loading vaijan</h2>
    }
   if(user?.uid){
    return children;
   }
   if(! user?.uid){
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
   }
};

export default PrivateRoute;