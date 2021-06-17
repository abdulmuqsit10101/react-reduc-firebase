import React, {useState} from 'react'
import { signIn as signInAction } from '../../store/actions/authActions';
import { connect } from "react-redux";

const SignIn = ({ signInError, signIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email : ', email, ' password : ', password);
    signIn({email, password})
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
        <div className="red-text center">
          {signInError ? <p>Login Failed!</p> : null}
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
    return {
      signInError: auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (credentials) => dispatch(signInAction(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
