import React, { useState, useEffect } from "react";
import { BiLoaderCircle } from "react-icons/bi";

import { ReservarEstandar } from "../components/componentesReservas/ReservarEstandar";
import "../style/CabañaEstandar.css"; //padding top para la card


export const ReservaEstandar = () => {
/*Generando las peticiones y recibiendo la respuesta desde el servicio externo:
      Se genero un archivo JSON en un repositorio de github, luego se cargo el archivo en la plataforma de la API falsa
    */
      const [cabin, setCabin] = useState([]);
      useEffect(() => {
          fetch("https://my-json-server.typicode.com/GabrielMolina-UTN/datosReservaCaba-a/cabanas")
            .then((response) => response.json())
            .then((dataCabin) => {
              console.log(dataCabin);
              setCabin(dataCabin);
            });
        }, []);


 return(
    <>
          <div className="container text-center card-position-top"> 

               <div className="row justify-content-center">
                  <div className="col-lg-8 ">
                  {(!cabin.length) ?  <BiLoaderCircle  size={50}/> : (
                                                                        cabin.map((item) => (
                                                                                              <ReservarEstandar key={`${item.id}`} datos={item} />
                                                                                             ) )
                  )}                          
                  </div>
               </div>

         </div>       
   </>
 )
 
}
