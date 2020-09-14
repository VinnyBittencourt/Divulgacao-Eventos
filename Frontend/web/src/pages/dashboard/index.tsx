import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";

import bigimg from "../../assets/happy-bunch.png";

import "./styles.css";

function login() {
    return (
        <div className="center dashboard_container">
            <header>
                <h1>All Events</h1>
                <Link to="/newevent">New event</Link>
            </header>
            <div className="card_container">
                <div className="card">
                    <img src="" alt="Event" />
                    <h2>Festival</h2>
                    <p className="card_text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt qui repellendus impedit ratione alias sed
                        animi quae atque dicta sint. Officia repellendus,
                        repudiandae laudantium modi accusantium provident
                        magnam. Nobis, officiis?
                    </p>
                    <div className="box-card">
                        <FiMapPin></FiMapPin>
                        <p>RJ, Brazil</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;
