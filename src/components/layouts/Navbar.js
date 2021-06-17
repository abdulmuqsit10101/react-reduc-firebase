import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux';

const Navbar = ({ isSignedIn }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
        {isSignedIn ? <SignedInLinks/> : <SignedOutLinks />}
      </div>
    </nav>
  )
}

const mapStateToProps = (states) => {
  console.log('states => ', states);
  return {
    isSignedIn: !states.firebase.auth.isEmpty
  }
}

export default connect(mapStateToProps)(Navbar)
