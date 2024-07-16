import React, { Fragment } from 'react';
import "../style/SectionAgentes.css";
import {getAgentes} from "../dataUsuarios";
import { Link } from 'react-router-dom';

export const SectionAgentes = () => {
    let agentes = getAgentes();
  return (
    <Fragment>
        
            <div className='row justify-content-center'>
                <div className='col-lg-6'>
                    <section className='sectionAsesor'>
                       <div className=' card-container-asesores'>
                            <h3 className='mb-4'>Agente inmobiliario</h3>
                            <ul className='d-flex'>
                                {agentes.map((user)=>(
                                    <Link key={user.id} to={"/contacto"} className='link-agente'>
                                        <div className='mx-3'>
                                            <img src={user.photo} alt="Imagen del usuario" />
                                            <p className='text-dark mt-2'><strong>Nombre: </strong>{user.lastName}, {user.firstName}</p>
                                            <p className='text-dark'><strong>Email: </strong>{user.email}</p>
                                        </div>
                                        
                                    </Link>
                                ))}
                            </ul>
                            
                        </div>
                    </section>
                </div>
            </div>
            
        
    </Fragment>
  )
}
