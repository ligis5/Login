import React, {useState, useEffect} from 'react';
import './login.css';




const Login = ({data}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [welcome, setWelcome] = useState(false);

    useEffect(() => {
        checkLogin()
    }, [])
    const checkLogin = () => {
        setUsername(localStorage.getItem('username'));
        setPassword(localStorage.getItem('password'));
    }

    const updateUsername = e => {
        setUsername(e.target.value);
    }
    const updatePassword = e => {
        setPassword(e.target.value)
    }
    const getLogin = e => {
        e.preventDefault();
        setUsername('');
        setPassword('');
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        if (localStorage.getItem('username') === 'frontend@isawesome.com'
        && localStorage.getItem('password') === 'cool'){
         console.log(data);
         alert("Welcome back Traveler")
        } else{
            alert("I dont know u")
        } 
    }

    


    return (
        <div className='login-form'>
        <div className='top-text'>
            <h4>lala</h4>
        </div>
            <div className='form-box'>
                <form onSubmit={getLogin} >
                    <input className='input-username'
                        onChange={updateUsername}
                        type='text'
                        placeholder="Username"
                        required
                        value={username}
                    />
                    <input className='input-passoword'
                    onChange={updatePassword}
                        type='password'
                        placeholder='Password'
                        required
                        value={password}
                    />
                    <button>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;