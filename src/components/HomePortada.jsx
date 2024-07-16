import React from 'react'
import "../style/HomePortada.css"
import Cabin from "../assets/cabin1.webp"
import cabinA from "../assets/cabinA.jpg"
import cabinB from "../assets/cabinB.jpg"
import cabinC from "../assets/CabinC.jpg"
import cabinD from "../assets/cabinD.jpg"
import cabinE from "../assets/cabinE.jpg"

import rio from "../assets/rio.webp"
import fishing from "../assets/fishing.webp"
import { Link } from 'react-router-dom'

import { BtnVerCabin } from './BtnVerCabin'


export const HomePortada = () => {


  return (
    <>
       

        <div className='d-flex  justify-content-center mt-5 mb-5 pt-4 portada-container'>
                <div className='pt-5'>
                    <p>APART HOTEL & CABAÑAS PUERTO ESCONDIDO</p>
                    <h2>UN LUGAR ESPECIAL</h2>
                    <p className='texto mt-4'>Nuestro complejo de cabañas cuenta con 10 unidades: 9 cabañas  equipadas para 4 a 6 personas y  un loft para 2 personas, construidas con troncos de robles, piedras y amplios ventanales con doble vidrio, respetando el estilo de las zonas de aldeas montanas.
                    Desde cada una de las cabañas,  nuestros visitantes podrán gozar de una estupenda vista al Lago Nahuel Huapi que abraza nuestras costas, acompañados de aves autóctonas que son parte de nuestro  ambiente tranquilo y natural.</p> 
                    <Link className='verCabañas' to={"/cabañas"} > <BtnVerCabin/> </Link>
                </div>

                <img className='imagen' src={Cabin} alt="Imagen de huspedes" />

        </div>


        
                <div className='d-flex  justify-content-center mt-5 pt-5 portada-container'>
                    <div>
                        <p>APART HOTEL & CABAÑAS PUERTO ESCONDIDO</p>
                        <h2>DISFRUTÁ NUESTRAS CABAÑAS</h2>
                    </div>
                </div>             


                <div className='grid-container'>
                        <div className='grid'>
                                <img className='image1' src={cabinA} alt="Imagen de cabaña" />
                                <img className='image' src={cabinB} alt="Imagen de cabaña" />
                                <img className='image' src={cabinC} alt="Imagen de cabaña" />
                                <img className='image' src={cabinD} alt="Imagen de cabaña" />
                                <img className='image' src={cabinE} alt="Imagen de cabaña" />
                        </div>
                </div>

                <div className='d-flex justify-content-center descripcion-container'>
                    <div>
                        <h2>Aventuras al aire libre</h2>
                        <img src={rio} alt="Imagen del rio Esmeralda" />
                        <p>Puerto Escondido, Patagonia, es un destino perfecto para quienes buscan estar al aire libre. Con una gran variedad de actividades al aire libre para elegir, hay algo para todos. Desde senderismo hasta paseos a caballo, pesca, acampada y mucho más, esta hermosa zona es un paraíso tanto para los amantes de la naturaleza como para los aventureros.</p>
                        <p>Las aguas cristalinas del cercano embalse Palisades también ofrecen excelentes oportunidades para nadar, navegar, hacer kayak y practicar surf de remo, mientras que las montañas cercanas ofrecen vistas impresionantes y numerosos senderos para practicar senderismo y ciclismo de montaña. En invierno, los visitantes pueden disfrutar del esquí, el snowboard, las motos de nieve y las caminatas con raquetas de nieve. Con tanto para hacer y ver, Puerto Escondido, Patagonia, es un destino de visita obligada para quienes quieran experimentar la emoción de la vida al aire libre.</p>
                    </div>

                    <div>
                    <h2>Pesca con mosca de clase mundial</h2>
                    <img src={fishing} alt="Imagen de un pescador en el rio Esmeralda" />
                    <p>Puerto Escondido contiene la bifurcación sur del río Esmeralda, un importante afluente de Idaho que crea un lugar espectacular para la pesca con mosca. Con sus aguas cristalinas de montaña y sus diversas especies de peces, entre las que se incluyen la trucha degollada, la trucha arcoíris, la trucha blanca y la trucha marrón, Puerto Escondido ofrece una experiencia de pesca inolvidable.</p>
                    <p>El entorno sereno y pintoresco se suma al ambiente y lo convierte en un deleite para todos los pescadores con mosca, ya sean principiantes o veteranos experimentados. Ser testigo del baile de una variedad de peces hace que visitar las diferentes secciones del río Esmeralda en Puerto Escondido sea una experiencia emocionante y entretenida. Ya sea un pescador experimentado o un principiante, seguramente quedará fascinado por la belleza que lo rodea.</p>
                    </div>

                </div>

          
    
        
    </>
  )
}
