import React, { useState, useEffect } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { DetalleCabin } from "../components/DetalleCabin";

export const Cabañas = () => {
    /*Generando las peticiones y recibiendo la respuesta desde el servicio externo:
      Se genero un archivo JSON en un repositorio de github, luego se cargo el archivo en la plataforma de la API falsa
    */
    const [cabin, setCabin] = useState([]);
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/GabrielMolina-UTN/Cabins/cabanas")
          .then((response) => response.json())
          .then((dataCabin) => {
            console.log(dataCabin);
            setCabin(dataCabin);
          });
      }, []);


  return (
    <>
     
     <div className="container text-center card-position-top"> 

      <div className="row justify-content-center">
          <div className="col-lg-10 ">
                  {(!cabin.length) ?  <BiLoaderCircle  size={50}/> : (
                                                                        cabin.map((item) => (
                                                                                              <DetalleCabin key={`${item.id}`} datos={item} />
                                                                                             ) )
                  )}
                                           
          </div>
      </div>

     </div>            
       
    </>
  )
}
