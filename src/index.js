/* 
    Importamos la libreria de REACT
*/
import React from "react";


/* 
    Importamos la interfaz de REACT que vamos a usar en este caso la de cliente
*/
import ReactDOM from "react-dom/client";


/* 
    Espacio para la importacion de los componentes a utuilizar
*/
import App from "./App.jsx";


/* 
    Le indicamos a react qeuy elemnto va a estar utilizadno y lo guardamos en un variable
*/
const rootElement = document.getElementById("root");


/* 
    Le indicamos que crea elemento root de react con el elemnto root que selecionamos previamnente.
*/
ReactDOM.createRoot(rootElement);


/* 
    Lo guardamos en una constante para usarlo mas facilmente
*/
const root = ReactDOM.createRoot(rootElement);


/* El renderizado de nuestro componente */
root.render(
    <App />
);
