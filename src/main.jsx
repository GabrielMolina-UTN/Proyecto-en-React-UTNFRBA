import React from 'react';
import ReactDOM from 'react-dom/client';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SectionAgentes } from './routes/SectionAgentes.jsx';
import { Cabañas } from './components/Cabañas.jsx';
import { Login } from './components/Login.jsx';
import { SignIn } from './components/SignIn.jsx';
import { CabañaEstandar } from './routes/CabañaEstandar.jsx';
import { CabañaMiniHouse } from './routes/CabañaMiniHouse.jsx';
import { CabañaElAlto } from './routes/CabañaElAlto.jsx';
import { CabañaLaPiedra } from './routes/CabañaLaPiedra.jsx';

import App from './App.jsx';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header';

import { UserContextProvider } from './context/userContext';
import { ReservaEstandar } from './routes/ReservaEstandar.jsx';

//import { Logout } from './components/Logout.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <UserContextProvider>

                <BrowserRouter>
                <Header /> {/*Al inicio, ya que aparecer{a en todas las visvtas} */}
               
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/sectionAgentes" element={<SectionAgentes />} />
                    <Route path="/cabañas" element={<Cabañas />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path='/cabañaEstandar' element={<CabañaEstandar />}/>
                    <Route path='/cabañaMini' element={<CabañaMiniHouse />}/>
                    <Route path='/cabañaAlto' element={<CabañaElAlto />}/>
                    <Route path='/cabañaPiedra' element={<CabañaLaPiedra />}/>
                    <Route path="/reserva" element={<ReservaEstandar />} />
                    
                   
                    
                    
                </Routes>
                 <Footer />   {/*Al ultimo, porque guarda relacion a la ubicacion del footer */}
                 
            </BrowserRouter>

        </UserContextProvider> 
       
    </React.StrictMode>
);
