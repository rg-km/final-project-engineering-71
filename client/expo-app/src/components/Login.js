import React from "react";


const login = () => {
  return (
    <section className="login">
        <h5>Log in into your account</h5>
        <form className="form">
            <p>Username</p>
            <input type="text" placeholder="Enter Username" id="username" />
            <p>Password</p>
            <input type="password" placeholder="Enter Password" id="password" />
            <button>Log in</button>
        </form>
        <p>Dont have an account ? <span><a href="/regis">Sign Up</a></span> </p>
    </section>
  );
};

export default login;
