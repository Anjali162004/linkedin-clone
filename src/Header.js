import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function Header() {

    // const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();

    }

    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://tse4.mm.bing.net/th?id=OIP.-ezoc37pkXQ9nMkwk33RUAHaHa&pid=Api&P=0" alt="" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>


            <div className="header_right">

                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccount} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} title='me' onClick={logoutOfApp} />



            </div>
        </div>
    )
}

export default Header


// avatar=" https://th.bing.com/th/id/OIP.BVSgdvM7D7eYeIoyzmJ0QQHaGm?w=208&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7"