import React from 'react'
import "../style/DetalleCabin.css";

export const DetalleCabin = ( {datos} ) => {
  return (
    <>       
              <div className='cabañas-container d-flex'>                       
                <img src={datos.photo}alt="Foto de la cabaña" className='imgCabin'/>
                <div className='informacion-container p-3'>
                  <h2 className='pb-3'>Cabaña {datos.name}</h2>
                  <p><strong>Cantidad de personas: </strong>{datos.cantidadPersonas}</p>
                  <p><strong>Superficie: </strong>{datos.superficie}</p>
                  <p><strong>Tarifa: </strong>{datos.tarifa}</p>
                  <p className='parrafo-descripcion'><strong>Descripción: </strong>{datos.descripcion}</p>
                </div>                      
              </div>                                   
    </>
  )
}
