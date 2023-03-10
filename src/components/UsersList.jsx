import React, { useEffect, useContext } from "react";

/* 
    Importamos los contextos que vamos a usar
*/
import UserContext from '../context/User/UserContext';

const UserList = () => {

    /* 
        Aceder a  nuestro contexto, lo guardamos en una variable y sacamos los datos que deseamos de los que tenemos acceso,
    */
    const { users, getUsers, getProfile } = useContext(UserContext)


    /* 
        Aqui creamos el efecto de que contexto necesitamos y l alogica, llamamos nuestra funcion getUsers importada anterior mente.
    */
    useEffect(() => {
        getUsers();
    }, [])

    return ( 
       <div className="list-group h-100">
            {
                users.map(user => ( 
                    <a  className="list-group-item list-group-item-action d-flex flex-row justify-content-start" href="#!" key={user.id} onClick={ () => { getProfile(user.id) } }>
                        <img src={ user.avatar } alt={ user.first_name } className="img-fluid mr-4 rounded-circle" width="70" />
                        <p style={ {margin: "auto 15px"} }>
                            { `${user.first_name} ${user.last_name}` }
                        </p>
                    </a>
                ))
            }
       </div>
    )
}

export default UserList;