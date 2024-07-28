import React from "react";
import "../style/Login.css";

//Quiero verificar si el email y la contraseña que se env{ia coincide con los datos almacenados en Firebase...
import {auth} from "../Firebase"; //auth representa la instancia local del servicio de autenticacion
import { signInWithEmailAndPassword } from "firebase/auth";


export const Login = () => {

    //manejador del submit del formulario
    const handleSubmit =(e)=>{
        e.preventDefault();
        const {email, password} = e.target.elements; //desestructurando

        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential)=>{
                                const user = userCredential.user;
                                console.log(user);
                
        })

        .catch((err)=>{
            const errorCode = err.code;
            const errorMessage = err.message;
            console.error(errorCode)
            console.error(errorMessage);
            /*si sale mal, q diga q salio mal */

        });

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
                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <button type="submit" className="btn btn-form">Iniciar</button>
                            </form>
                        </div>
                    </section>
                </div>
         </div>
    </>
  )
}
