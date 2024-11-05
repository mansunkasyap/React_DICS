import React, { useState, useContext, useRef } from 'react'

import UserContext, { createdContext } from '../context/UserContext'
import hide from '../images/hide.png'
import show from '../images/show.png'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isShown, setisShown] = useState(true)
    const { user, setUser } = useContext(createdContext)
    const first = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }

    const toggle = (e) => {
        setisShown(prev => !prev)
        first.current.type = isShown ? 'text' : 'password';
    }
    const imgSrc = isShown ? hide : show;
    return (
        <div className='login-compo'>
            <h2>Login</h2>
            <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />


            <div className='pwd-container'>
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    ref={first}
                    onChange={(e) => (setPassword(e.target.value))}
                />
                <span className='cursor-pointer bg-red-500'
                    onClick={toggle}
                >
                    <img src={imgSrc} alt="" />
                </span>
            </div>
                <button className='bg-green-700'
                    onClick={handleSubmit}
                >
                    Submit</button>



        </div>
    )
}

export default Login