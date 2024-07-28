import React from 'react'
import { NavLink } from 'react-router-dom'

import "../style/CardGenerica.css"
import "../style/BtnVerCabin.css";

import Cabana1 from "../assets/cabana1.webp";
import Cabana2 from "../assets/cabana2.webp";
import Cabana3 from "../assets/cabana3.webp";
import Cabana4 from "../assets/cabana4.webp";


export const CardGenerica = () => {
  return (
    <>
            <div className='card-container px-5 py-4'>
                <div className='carrusel-container bg-warning corrusel' >
                    <div id="carouselExampleControls" className="carousel slide carrusel-height" data-bs-ride="carousel" >
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src={Cabana1} className="d-block w-80" alt="imagen del living comedor de la cabaña Estandar"/>
                            </div>
                            <div className="carousel-item">
                              <img src={Cabana2} className="d-block w-80" alt="imagen del living comedor de la cabaña Estandar"/>
                            </div>
                            <div className="carousel-item">
                              <img src={Cabana3} className="d-block w-80" alt="imagen del dormitorio principal de la cabaña Estandar"/>
                            </div>
                            <div className="carousel-item">
                              <img src={Cabana4} className="d-block w-80" alt="imagen del dormitorio secundario de la cabaña Estandar"/>
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
                            <h2>Cabaña Estándar</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo ut aperiam voluptate. Enim mollitia atque ipsam voluptatibus non quas illo nesciunt minima ducimus. Est enim nobis aut eaque consequatur.</p>
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
