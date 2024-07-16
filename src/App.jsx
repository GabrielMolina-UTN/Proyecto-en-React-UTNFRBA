import React, { Fragment, useContext, useEffect } from 'react'; 
//useEffect me permie gestionar efectos secundarios en las fciones. o componentes. Una vez que renderice el componente hago correr el useEffect
import { HomePortada } from './components/HomePortada';
import './style/App.css';

//ME TRAIGO EL CONTEXTO Y EL PROVEEDOR:
import { UserContext } from './context/userContext';

import { auth } from "./Firebase";
import { onAuthStateChanged } from 'firebase/auth';


function App() {
                    //Aqui, a traves del objeto me traigo desde el contexto use y setUser

    const {user, setUser} = useContext(UserContext); //le paso el contexto

    useEffect(()=>{onAuthStateChanged(auth, (user)=>{
                                                      if (user) {  //si hay un usuario
                                                                 setUser(user.email)
                                                      }
    })}, []/*para q lo haga una sola vez */ )

    return (
        <Fragment>
            <main className='row justify-content-center text-center'>
                <div className='col-lg-8'>
                    <HomePortada />
                </div>
            </main>
        </Fragment>
    );
}

export default App;
