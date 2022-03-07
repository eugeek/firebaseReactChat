import {Button, Container, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const NavBar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        auth.signOut();
    };

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Firebase-React Chat</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {
                        user
                        ? (
                            <Button variant="outline-danger" onClick={handleSignOut}>Sign Out</Button>
                        )
                        : (
                            <NavLink to="/login">
                                <Button variant="outline-primary">Sign In</Button>
                            </NavLink>
                        )
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;