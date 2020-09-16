import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import imgfestival from "../../assets/download.jpg";

import "./styles.css";

function login() {
    return (
        <div className="center dashboard_container">
            <header>
                <h1>New Event</h1>
                <Link to="/dashboard" className="Link">
                    <FiArrowLeft></FiArrowLeft>Go back
                </Link>
            </header>
            <div className="event_container">
                <form className="form-event">
                    <h1>New Event.</h1>
                    <div className="group-form">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="group-form">
                        <label htmlFor="place">Place</label>
                        <input type="text" name="place" />
                    </div>
                    <div className="group-form">
                        <label htmlFor="info">Information</label>
                        <textarea name="info" />
                    </div>
                    <div className="group-form">
                        <label htmlFor="pic">Picture</label>
                        <input type="file" name="pic" className="file_input" />
                    </div>
                    <button type="submit">Add Event</button>
                </form>
            </div>
        </div>
    );
}

export default login;
