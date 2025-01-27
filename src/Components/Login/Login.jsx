 import React, { useState } from 'react'
 import './Login.css'

const Login = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const getData=(e)=>{
    console.log(email,password)

}

  return (
    <div className='container'>
        <div className='form_container'>
            <h1>Login</h1>
            <hr/>
            <div>
            <label>Username</label><br/>
            <input type='text' name="email"  value={email} onChange={e=>{setEmail(e.target.value)}}></input>
            </div>
            <div>
                <label>Password</label><br/>
                <input type='password' name='password' value={password} onChange={e=>{setPassword(e.target.value)}}></input>
            </div>
            <div >
                <div style={{'marginTop':'15px'}}>
                <label>Don't have account please <a href=''>Register</a></label><br/>
                <label> <a href=''>Forgot password</a></label><br/>
          
                </div>
                 <button onClick={getData} id="btn">Login</button>
            </div>
       

        </div>
    </div>
  )
}

export default Login