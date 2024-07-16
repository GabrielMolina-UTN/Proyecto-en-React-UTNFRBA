import React from 'react'
import { NavLink } from 'react-router-dom'
import "../style/NavBar.css"
import { Logout } from './Logout'

export const NavBar = (  ) => {
  return (


   <>
             <div className='row d-flex justify-content-center mt-3 '>
                        <div className='col-lg-4'> 
                            <nav className="navbar ">
                                <button className='btn'>
                                        <NavLink className="links" to={"/"} >
                                            Home
                                        </NavLink>
                                </button>
                                
                                <div className="dropdown hover-dropdown">
                                    <button className="btn dropdown-toggle desplegable-cabaña" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cabañas <span className='margen'></span>
                                    </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <NavLink to={"/cabañaEstandar"} className="dropdown-item"> Cabaña Estándar</NavLink>
                                            <NavLink to={"/cabañaMini"} className="dropdown-item" >Cabaña Mini House</NavLink>
                                            <NavLink to={"/cabañaAlto"} className="dropdown-item" >Cabaña El Alto</NavLink>
                                            <NavLink to={"/cabañaPiedra"} className="dropdown-item" >Cabaña La Piedra</NavLink>
                                        </ul>
                                </div>
                                
                                <button className='btn'>
                                    <NavLink className='links' to={"/sectionAgentes"}>Asesores</NavLink>
                                </button>
                                
                                <button className='btn'>
                                   <NavLink className='links' to={"/login"}  >Login</NavLink>   
                                </button>
                                <button className='btn'>
                                   <NavLink className='links' to={"/signin"}   >Registrarse</NavLink>   
                                </button>
                                
                                <Logout/>

                                
                            </nav>  
                        </div>
                </div>
   </>
  )
}
