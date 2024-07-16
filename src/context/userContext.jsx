/*1ª) Creo un archivo de contexto (una aplicacion puede tener mas de un contexto, nosotros
    usaremos un contexto para pasar el estado interno del componente)
2ª) Tenemos dos hook para el contexto, uno para crear un contexto y el otro para usarlo
    (useContext)
 */
import React, { createContext, useState } from "react";

export const UserContext = createContext();

/* Ahora lo utilizamos aqui: Debo proveer la informacion del contexto al resto de la 
aplicacion, asi q creo un proveedor: */

export const UserContextProvider = ({ children }) => {
    //definimos el estado para el usuario:
    const [user, setUser] = useState(null); //En principio no hay ningun usuario
    

    //<StateComponent.provider/> envuelve a todos los componentes, a todos ellos les voy a 
    // el estado. El proveedor va a pasar valores a traves de un objeto: //usamos la prop children:

    return <UserContext.Provider value={{user, setUser}}>  {children} </UserContext.Provider>

}; 

