import React from 'react'
import { NavBar } from './NavBar'
import "../style/Header.css"

import Logo from "../assets/LOGOCABIN.jpg"

//Debe usarse UseContext en lugar de anviar el seteado como prop
export const Header =() => {
  return (
    <>
        <div className='container'>
            <header className='fixed-top'>
                <div className='row justify-content-center text-center pt-2'>
                        <div className='col-lg-12 d-flex'>
                            <div className='logo-titulo'>
                                <img className='px-2 my-2' src={Logo} alt="Laguna Azul" /><h1 className=' py-4 my-3 '>Puerto Escondido</h1>
                            </div>                                
                          
                        </div>
                          <p className='text-light'>Encuentra tu lugar en el mundo.</p>
                </div>
                <NavBar/>
               
            </header>
        </div>
    
    </>
  )
}
