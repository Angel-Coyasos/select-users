import React, { useEffect, useContext } from "react";

/* 
    Importamos nuestro contexto
*/
import UserContext from '../context/User/UserContext';

const Profile = () => {

    const { seletedUser } = useContext(UserContext)
    
    return (
        <>
            { seletedUser ? (<div className="card card-body text-center">
                <img src={seletedUser.avatar} alt={seletedUser.avatar} className="card-img-top mr-4 rounded-circle m-auto img-fluid" width="180" />
                <h1>{ `${seletedUser.first_name} ${seletedUser.last_name}` }</h1>
                <h3>email: {seletedUser.email}</h3>
            </div>) : ( <h1 className="card card-body text-center">No user selected</h1> ) }
        </>
    )
}

export default Profile;