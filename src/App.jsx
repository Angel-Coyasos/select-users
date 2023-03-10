import "./App.css";

/* 
    Aqui voy a importar componentes
*/
import UserList from "./components/UsersList";
import Profile from "./components/Profile";

/* 
    Importamos el context de UserState
*/
import UserState from "./context/User/UserState";

/* 
    Importamos libreria BOOSTRAP
*/
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <UserState>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-7">
                    <UserList />
                    </div>
                    <div className="col-md-5 align-self-center">
                    <Profile/>
                    </div>
                </div>
            </div>
        </UserState>
    );
}

export default App;
