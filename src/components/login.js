import {Button, Container} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../index";
import firebase from 'firebase/compat/app';

const Login = () => {
    const { auth } = useContext(Context);

    const handleLogin = async () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(googleProvider);
    };

    return (
        <Container className="top-cover center-block text-center d-grid gap-2">
            <Button variant="warning" size="lg" onClick={handleLogin}>
                Sign in with Google
            </Button>
        </Container>
    );
};

export default Login;