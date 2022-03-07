import {useContext, useState} from "react";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Col, Container, Form} from "react-bootstrap";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from 'firebase/compat/app';
import Loader from "./loader";
import * as PropTypes from "prop-types";

function MDBCard(props) {
    return null;
}

MDBCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
const ChatMaster = () => {
    const {auth, db} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        db.collection('messages').orderBy('createdAt')
    );

    const sendMessage = async () => {
        db.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('');
    };

    if(loading) {
        return  <Loader />
    }

    return (
        <Container className="d-lg-flex align-items-center">
            <Col style={{
                width: '80%',
                height: '70vh',
                border: '1px solid black',
                overflowY: 'auto'
            }}>
                {messages.map(message =>
                    <div>
                        <div className="d-flex align-items-center">
                            <img
                                src={message.photoURL}
                                className="rounded-circle"
                                style={{width: 50}}
                                alt="Avatar"
                            />
                            <h5>{message.displayName}</h5>
                        </div>
                        {message.text}
                    </div>
                )}
            </Col>
            <Col className="justify-content-center">
                <input type="text" placeholder="Message" value={value} onChange={e => setValue(e.target.value)} />
                <Button onClick={sendMessage}>Send</Button>
            </Col>
        </Container>
    );
};

export default ChatMaster;