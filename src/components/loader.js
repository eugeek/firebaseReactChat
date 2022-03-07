import {Container} from "react-bootstrap";

const Loader = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    );
};

export default Loader;