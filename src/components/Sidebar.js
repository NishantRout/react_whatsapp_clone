import React, { useState, useEffect } from 'react';
import './css/Sidebar.css';
import { Avatar, Button, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from '../config/firebase';
import { useStateValue } from '../contexts/StateProvider';
import firebase from 'firebase';

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();
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

    const signOut = () => {
        firebase.auth().signOut().then(function () {
            dispatch({
                type: "SET_USER",
                user: null
            })
        }).catch(function (error) {
            alert(error.message)
        });
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Button onClick={signOut}>
                    <Avatar src={user?.photoURL} />
                </Button>
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
