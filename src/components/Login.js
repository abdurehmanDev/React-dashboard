import React from 'react'
import './Styles/Login.css'

const Login = (props) => {
    const {email, setEmail, password, setPassword, handleSignup, handleLogin, hasAccount,  setHasAccount, emailError, passwordError} = props;
    return (
        <section className="login">
            <div className="login-container">
             <label className='label'>Username</label>
             <input type="text" className='login-input'  required value={email} onChange={(e) => setEmail(e.target.value)} />
             <p className="errorMsg">{emailError}</p>
             <label className='label'>Password</label>
             <input className='login-input' type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
             <p className="passwordError">{passwordError}</p>
             <div className="btn-container">
                 {hasAccount ? (
                     <>
                        <button className="btn-login" onClick={handleLogin}>Sign in</button>
                        <p className='bottom-line'>Don't have account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                     </>
                 ) : (
                    <>
                        <button className="btn-login" onClick={handleSignup}>Sign up</button>
                        <p className='bottom-line'>Have a account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                 )}
             </div>

            </div>
            
        </section>
    )
}

export default Login