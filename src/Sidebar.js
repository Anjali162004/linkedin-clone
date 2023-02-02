import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src=" https://th.bing.com/th/id/OIP.OCxwOkCpJ7FWiezkTurP5wHaEL?w=321&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
                <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,543</p>
                </div>

                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">5,667</p></div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareEngineering ')}
                {recentItem('developer')}
                {recentItem('design')}
            </div>
        </div>
    );
}

export default Sidebar;