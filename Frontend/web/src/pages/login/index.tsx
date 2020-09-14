import React from "react";
import { Link } from "react-router-dom";

import bigimg from "../../assets/happy-bunch.png";

import "./styles.css";

function login() {
    return (
        <div className="bigcontainer">
            <div className="left_container">
                <form className="form">
                    <h1>Log in.</h1>
                    <p>
                        log in with your information entered during your
                        registrations.
                    </p>
                    <div className="group-form">
                        <label htmlFor="email">Your e-mail</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="group-form">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" />
                    </div>
                    <button type="submit">Log in</button>
                </form>
                <Link className="signup" to="/register">
                    Don't have an account? <span>Sign up</span>
                </Link>
            </div>
            <div className="right_container">
                <img src={bigimg} alt="logo" />
                <h1>Register Now</h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam.
                </p>
            </div>
        </div>
    );
}

export default login;
