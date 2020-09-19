import React, { useEffect, useState } from 'react';
import './css/SidebarChat.css';
import { Avatar } from '@material-ui/core';
import AddCommentIcon from '@material-ui/icons/AddComment';
import db from '../config/firebase';
import { useParams } from 'react-router-dom';

function SidebarChat(props) {
    const { id, name, addNewChat } = props;
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please Enter name for chat room!!");

        if (roomName) {
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h3>{name}</h3>
                <p>Last Message...</p>
            </div>
        </div>
    ) : (
            <div onClick={createChat} className="addNewChat">
                <AddCommentIcon />
                <h3>Add new chat</h3>
            </div>
        )
}

export default SidebarChat;
