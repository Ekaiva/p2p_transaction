import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to P2P</h1>
      <div className="buttons">
          <Link to="sign-up">
        <button className="signup">Sign Up</button>
        </Link>
        <Link to="login">
        <button className="signin">Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
