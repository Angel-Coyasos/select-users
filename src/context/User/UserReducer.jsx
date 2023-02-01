/* 
    Condicioales de funciones listadas en types.jsx
*/

import { GET_USERS, GET_PROFILE } from "../types";

/* 
    Recibir que datos nos estan pasadno
*/

export default (state, action) => {

    /* 
        vamos a recibir del action y guardar en una variable el type si es getProfile, o getUsers, y un payload (dtaos que me esten pasadno en esta funcion tambien es conocido como data)
    */
    const { payload, type } = action;

    /* 
        Este condicional es simplemente para qeu dependiendo del type que me pasen que queiro hacer.
    */
    switch (type) {

        case GET_USERS:

        /*  
            al llamar el GET_USERS, epseramos qeu nos retorne el estado actual de los usuarios, y esto lo hacemos por el dispat del archivo user State, por ende esta, es decir estoy ejecutando una funcion que le esta diciendo a GET_USERS que es lo que va a hacer, el recibe el stado, y el user lo actuliza a con los datos que le este pasando
        */
            return {
                ...state,
                users: payload
            }
    
        case GET_PROFILE:

            return {
                ...state,
                seletedUser: payload
            }

        /* 
            para que por si no lo tengo por defcto pueda ponerle un estado
        */
        default:
            return state;
    }
}