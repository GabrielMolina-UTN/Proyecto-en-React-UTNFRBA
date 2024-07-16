import React from 'react'
import { CardGenerica } from '../components/CardGenerica';
import "../style/CabañaEstandar.css";



//Detalle de la cabaña estandar
export const CabañaEstandar = () => {
  return (
    <>
            <div className="container text-center card-position-top"> 

                <div className="row justify-content-center">
                    <div className="col-lg-10 ">
                         <CardGenerica/>                             
                    </div>
                </div>

            </div>          
    </>
  )
}
