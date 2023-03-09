import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Registration = (props) => {

    const [firstName,setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm,setConfirm] = useState('')
    
    const registering = (e) => {
        e.preventDefault()
            const registered = [firstName, lastName, email, password, confirm]
            console.log("new registration!", {registered} )
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirm('')
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
        <form onSubmit={registering}>
            <h2>Welcome, we're happy to have ya! <br/> Register here!</h2>
            <div>
                <label>First Name:</label>
                <input type='text' onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name:</label>
                <input type='text' onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email:</label>
                <input type='email' onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password:</label>
                <input type='password' onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password' onChange={ (e) => setConfirm(e.target.value) } />
            </div>
            <div>
                <input type='submit' />
            </div>
            <Link to='/'> Already have an account? Click her to register!</Link>
        </form>
    </div>
  )
}

export default Registration