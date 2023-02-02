import React, { useState } from 'react';
import './Login.css'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        if (!name) {
            return alert("Please Enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            }));
                    });
            }).catch((error) => alert(error.message));
    };

    const register = () => {
        if (!name) {
            return alert("Please Enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            }));
                    });
            }).catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <img src="https://logo-marque.com/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.jpg " alt="" />

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if registering)' type="text" />

                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile pic URL' type="text" />

                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />

                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="password" />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?
                <span className='login_register' onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login



// https://th.bing.com/th/id/OIP.ET7dA_ENIRNBE7R0WZ04pwHaFH?w=255&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7