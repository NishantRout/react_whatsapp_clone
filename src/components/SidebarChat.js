import React, { useEffect, useState } from 'react';
import './css/SidebarChat.css';
import { Avatar } from '@material-ui/core';
import AddCommentIcon from '@material-ui/icons/AddComment';

function SidebarChat(props) {
    const { addNewChat } = props;
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please Enter name for chat!!");

        if (roomName) {
            //do some database stuff
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h3>Room Name</h3>
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
