/*Este achivo Firebase.js es solo un archivo gral. de arranque y Configuración. Por lo tanto debo usarlo fuera de este modulo
Por ello de EXPORTAR..
*/


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
/* TODO: Add SDKs (Add software development kits, son herramientas tales como metodos, fciones. q permiten usar de Firebase
distintas caracteristicas dentro de mi aplicacion local) for Firebase products that you want to use
*/
// https://firebase.google.com/docs/web/setup#available-libraries

//Importamos para autenticacion de usuario: getAuth() es un metodo que permite la autenticacion de Firebase dentro de mi proyecto
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj4Sa0VUgE3dzqCCIHQidQQr0FqzH6558",
  authDomain: "proyectoutn-auth.firebaseapp.com",
  projectId: "proyectoutn-auth",
  storageBucket: "proyectoutn-auth.appspot.com",
  messagingSenderId: "318651369153",
  appId: "1:318651369153:web:af74a2e7ab96397e25f640",
  measurementId: "G-66ZQP3TS4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); //Aquí en el argumento le digo cual es la aplicacion q quiero que autentifique (la aplicacion A)