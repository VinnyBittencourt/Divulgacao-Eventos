import React, { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

import bigimg from "../../assets/happy-bunch.png";

import "./styles.css";

import api from "../../services/api";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    async function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const data = {
            email,
            password,
        };

        try {
            const respon = await api.post("/sessions", data);
            console.log(respon);
            history.push("/dashboard");
        } catch (error) {
            console.log(error);
            swal("Ops!", "Invalid email or password!", "error");
        }
    }

    return (
        <div className="bigcontainer">
            <div className="left_container">
                <form className="form" onSubmit={handleLogin}>
                    <h1>Log in.</h1>
                    <p>
                        log in with your information entered during your
                        registrations.
                    </p>
                    <div className="group-form">
                        <label htmlFor="email">Your e-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="group-form">
                        <label htmlFor="pass">Password</label>
                        <input
                            type="password"
                            name="pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
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
};

export default Login;
