import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import './css/Chat.css';

function Chat() {
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">
                        Nishant Rout
                    </span>
                    Hello
                    <span className="chat__timestamp">
                        10:14pm
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text" />
                    <button>Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat;
