import "../style/Footer.css"
import { GrYoutube } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { BotonReservar } from "./BotonReservar";

export const Footer = (  ) => {
  return (
    <>  

          <footer className="container fluid">
                    <div className="row justify-content-center row-container">
                          <div className="position">
                            <div className=" col-lg-12 w-50  d-flex justify-content-start principal-container px-5 ">                                              
                                  <h3 className="title-footer px-4">Visite Lago Escondido</h3>
                                  <span><p className="px-2">Descubra Puerto Escondido, en el valle Esmeralda. Las vistas a las montañas y las aguas cristalinas le invitan a practicar senderismo, pesca, paseos en bote, esquí y motos de nieve, por nombrar solo algunas. Los ríos apartados y el terreno montañoso crean un destino ideal durante todo el año. Aquí, la serenidad y la aventura brindan la escapada perfecta. Reserve su viaje hoy para experimentar todo lo que Puerto Escondido para ofrecer. 	</p></span>             
                                  <div className="p-2">
                                    <BotonReservar/>
                                  </div>
                            </div>   
                          </div>
                        
                        
                    </div>
                      
                      <div className="row row-social">
                            <div className="col-lg-12 d-flex justify-content-end addres-container">                                          
                               <ImFacebook2 className="social"/> <GrInstagram className="social"/> <GrYoutube className="social"/>
                            </div>
                      </div>
                       
           </footer>
             
    </>
  )
}
