import React from "react";

const login = () => {
    return (
        <div>
            <h4 id="loginTitle">Login In Into Your Account</h4>
            <form className="loginForm">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    autoComplete="off"
                    placeholder="Enter Username"
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    autoComplete="off"
                    placeholder="Enter Password"
                />
                <button type="submit">Login</button>
                <p>
                    Already have an account ?  
                    <span className="line">
                        <a href="#">  Sign Up</a>
                    </span>
                </p>
            </form>
        </div>
    )
}

export default login;