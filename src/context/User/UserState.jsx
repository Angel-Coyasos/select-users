import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axios from "axios";

/* 
    definimos un componente para los estados de nuestros componmentes
*/

const UserState = (props) => {

    /* 
        Definimos estado inicial
    */

    const initialState = {
        users: [],
        seletedUser: null,
    }


    /* 
        useState

        const [state, setState] = useState(initialState)
    */
    

    /* 
        useReducer
    */
    const [state, dispath] = useReducer(UserReducer, initialState)


    /* 
        Funcion para llenar estado de users, traera una lista de usuarios
    */

    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')

        /* 
            Llamamos el dispoath para pasarle algunas propiedades y actualizar el estado de las varibales, en modo de objectos ya que es como tenemos nuestra estructura.
        */
        dispath({
            type: 'GET_USERS',
            payload: res.data.data
        })
        
    }


    /* 
        Funcion par obtener un usuario
    */
    const getProfile = async (id) => {
        const res = await axios.get('https://reqres.in/api/users/' + id)
        dispath({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    }


    /* 
        Retornamos algo usando la funcion de react CONTEXT, y dentro todos los componentes que esten tendran acceso a este estado

        especificamos qeu queremops pasarle cuantas funicones.

        para eso usamos .Provider

        le indicamos con la propieda value a qeu van a poder acceder los hijos, en este caso le decimos qeu podran acceder al state, y las funicones
    */
   return (
        <UserContext.Provider value={{ 
            users: state.users,
            seletedUser: state.seletedUser,
            getUsers,
            getProfile,
        }}>
            {props.children}
        </UserContext.Provider>
   )

}

export default UserState;