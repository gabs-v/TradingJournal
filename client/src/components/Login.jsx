import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword,setLoginPassword] = useState('')

    const loggingIn = (e) => {
        e.preventDefault()

        const loggedIn = [loginEmail, loginPassword]
        console.log('You are logged in', {loggedIn})
    setLoginEmail('')
    setLoginPassword('')

    }

  return (
    <div id='container'>
        <div>
            <h1>Trade Tracker</h1>
            <h3> 
                <span>Track</span> your wins and losses.
            </h3>
            <h3>
                <span>Manage</span> risks more efficiently.
            </h3>
            <h3>
                <span>Achieve</span> your goals.
            </h3>
        </div>
        <form onSubmit={loggingIn} >
            <h2>Welcome Back! <br/> Sign in here!</h2>
            <div>
                <label>Email</label>
                <input type='email' onChange={ (e) => setLoginEmail(e.target.value) } />
            </div>
            <div>
                <label>Password</label>
                <input type='password' onChange={ (e) => setLoginPassword(e.target.value) } />
            </div>
            <div>
                <input type='submit' />
            </div>
            <Link to='/registration'> Don't have an account yet? Click her to register!</Link>
        </form>
    </div>
  )
}

export default Login