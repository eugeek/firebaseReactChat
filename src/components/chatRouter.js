
import { Route, Routes, Navigate } from 'react-router-dom';
import Login  from './login';
import ChatMaster from './chatMaster';
import {useAuthState} from "react-firebase-hooks/auth";
import {useContext} from "react";
import {Context} from "../index";

const ChatRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return user
        ? (
            <Routes>
                <Route path="/chat" element={<ChatMaster />} />
                <Route path="*" element={<Navigate to ="/chat" />}/>
            </Routes>
        )
        : (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to ="/login" />}/>
            </Routes>

        );
};

export default ChatRouter;