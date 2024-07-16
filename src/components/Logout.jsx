import React, { useContext } from 'react';

import { UserContext } from '../context/userContext';
import { auth } from '../Firebase';
import "../style/NavBar.css"

export const Logout = () => {
    //desestructurando
    const { setUser } = useContext(UserContext);

    const signOut = () => {
                        auth
                            .signOut()
                            .then(()=>{
                                setUser(null);
                            })
                            .catch((err)=>{console.error("Error signing out:", err)});
    };
   

  return (
    <>
        <button onClick={signOut}  className='btn btn-salir'>
            Salir
        </button>
    </>
  )
}
