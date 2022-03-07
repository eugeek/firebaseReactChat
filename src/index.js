import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCoFH68-nkfq8Mj0ugRhtXWrgRKygcCcGI",
    authDomain: "react-chat-eugeek.firebaseapp.com",
    projectId: "react-chat-eugeek",
    storageBucket: "react-chat-eugeek.appspot.com",
    messagingSenderId: "726273446497",
    appId: "1:726273446497:web:b23df55a81c9ffcf8c5020",
    measurementId: "G-VS5EWKLL1S"
});

const Context = createContext(null);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

ReactDOM.render(
    <Context.Provider value={{
        firebaseApp,
        auth,
        db
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

export { Context };