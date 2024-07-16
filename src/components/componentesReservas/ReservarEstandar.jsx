import React from 'react'
import "../../style/ReservarEstandar.css";

export const ReservarEstandar = ( {datos} ) => {
  return (
  <>
         <div className='cabañas-container d-flex'>                       
                <img src={datos.photo}alt="Foto de la cabaña" className='imgCabin rounded-3'/>
                <div className='informacion-container p-3'>
                  <h2 className='pb-3'>Cabaña {datos.name}</h2>
                  <p className='parrafo-descripcion'><strong>Descripción: </strong>{datos.descripcion}</p>

                  <select className="form-select mb-3 py-3 fw-bold fs-5" aria-label="Default select example">
                        <option className='py-4 mx-4 seleccion' selected >Seleccione el tipo de tarifa</option>
                        <option  value="1"><div className='estandar-select fw-bold py-4 fs-3'><div className='px-5'><p className='py-4'>Tarifa estándar - </p> </div> <div><p>{datos.precioTarifaEstandar} </p></div> </div> </option>
                        <option  value="2"><div className='estandar-select fw-bold py-4 fs-3'><div><p className='py-4'>Tarifa de temporada alta - </p></div> <div><p>{datos.precioTarifaTemporadaAlta}</p> </div> </div>    </option>
                  </select>
                  <div className='telefono w-80 '>
                      <p>{datos.telefono}</p>
                  </div>
                



                  
                </div>                      
          </div>    
  </>
  )
}
