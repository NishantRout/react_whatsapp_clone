import React, { useState, useEffect } from 'react';
import './css/Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from '../config/firebase';

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => {
            return (
                setRooms(snapshot.docs.map((doc) => {
                    return ({
                        id: doc.id,
                        data: doc.data()
                    })
                }))
            )
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar;
