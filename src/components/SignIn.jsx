import React from 'react'
import "../style/Login.css"

import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const SignIn = () => {

    const handleSubmit =(e)=>{
            e.preventDefault();
            //Extraemos del form email y contraseña: desestructurando..
            const {email, password} = e.target.elements; //.elements referido al name de cada input...

            createUserWithEmailAndPassword(auth, email.value, password.value)//El primer argumento q recibe es la instancia de autenticacion auth
                                                    //El segundo argumento es contenido del campo email
                                                    //El tercer argumento es el pass  en la vida real habria de hashear a pass, encriptarlo y 
                                                    //no deberia pasarse el password tal como lo escribe el usuario (existen paquetes para ofuscar las contraseñas)
            .then((userCredential) => {     
                                     const user = userCredential.user;
                                     console.log(user);
              /*si todo sale bien devuelve una credencial de usuario Este metodo devuelve una promesa*/                       
            })  
            .catch((err) =>  {
                          const errorCode = err.code;
                          const errorMessage = err.message;
                          console.error(errorCode)
                          console.error(errorMessage);
                          /*si sale mal, q diga q salio mal */
                          
            })                            
    };
  return (
   <>
        <div className='row justify-content-center'>
                <div className='col-lg-4'>
                    <section className='sectionLogin'>
                       <div className=' card-container'>
                            <form className="p-4" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Elegir Contraseña</label>
                                    <input type="password" name='password' className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Confirmar Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2"/>
                                </div>
                                <button type="submit" className="btn btn-form">Registrarse</button>
                            </form>
                           
                            
                        </div>
                    </section>
                </div>
            </div>
   </>
  )
}
