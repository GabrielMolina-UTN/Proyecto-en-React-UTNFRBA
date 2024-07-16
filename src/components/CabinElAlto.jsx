import React from 'react'

import { NavLink } from 'react-router-dom'

import "../style/CardGenerica.css"
import "../style/BtnVerCabin.css";

import Alto1 from "../assets/alto1.webp";
import Alto2 from "../assets/alto2.webp";
import Alto3 from "../assets/alto3.webp";
import Alto4 from "../assets/alto4.webp";



export const CabinElAlto = () => {
  return (
    <>
             <div className='card-container px-5 py-4'>
                <div className='carrusel-container bg-warning corrusel' >
                    <div id="carouselExampleControls" className="carousel slide carrusel-height" data-bs-ride="carousel" >
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src={Alto1} className="d-block w-80" alt="imagen del living comedor de la cabaña Estandar"/>
                            </div>
                            <div className="carousel-item">
                              <img src={Alto2} className="d-block w-80" alt="imagen del living comedor de la cabaña Estandar"/>
                            </div>
                            <div className="carousel-item">
                              <img src={Alto3} className="d-block w-80" alt="imagen del dormitorio principal de la cabaña Estandar"/>
                            </div>
                            <div className="carousel-item">
                              <img src={Alto4} className="d-block w-80" alt="imagen del dormitorio secundario de la cabaña Estandar"/>
                            </div>


                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Próxima</span>
                          </button>
                      </div>
                </div>
                <div className='detalle-container pt-4'>  
                    <div className='pt-3'> 
                            <h2>Cabaña El Alto</h2>
                            <p>Departamento monoambiente integrado con ventanales vista al lago, sommier matrimonial sino también se ofrece la opción de 2 camas singles, baño completo con hidromasaje, cocina integrada y equipada con heladera, horno y microondas, tv.</p>
                    </div>
                    <div className='servicios-container'> 
                            <h3>Servicios en la habitación</h3> 
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo cupiditate eaque itaque, repellat excepturi dolores, quaerat iste, eligendi suscipit aliquid officiis. Odio eum hic dolorem, ex esse doloribus quae? Commodi.   
                    </div>
                </div>
                
               
                <div className='reserva-container'>
                    <nav className='navbar justify-content-evenly navbar-reservar'>
                                <button className='btn btn-cabin'>
                                    <NavLink className='cabin' to={"/reserva"}>Reservar esta cabaña</NavLink>
                                </button>
                                
                                <button className='btn btn-cabin'>
                                   <NavLink className='cabin' to={"/ofertasEspeciales"}  >Ofertas Especiales</NavLink>   
                                </button>
                                <button className='btn btn-cabin'>
                                   <NavLink className='cabin' to={"/politicas"}>Políticas</NavLink>   
                                </button>
                    </nav>
                </div>
            </div>
    
    </>
  )
}
