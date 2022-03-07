import './App.css';
import ChatRouter from "./components/chatRouter";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar";
import {useContext} from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/loader";

function App() {
    const {auth} = useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    if(loading) {
        return <Loader />;
    }
    return (
        <BrowserRouter>
            <NavBar />
            <ChatRouter />
        </BrowserRouter>
    );
}

export default App;
