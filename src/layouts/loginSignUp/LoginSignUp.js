import React, { useState } from "react";
import "./LoginSignUp.css";
import { LogogSVG } from "../../SVGIcons/LogoSVG";
import { useNavigate } from "react-router";

const LoginSignUp = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="login-signup-container">
            <div className="navbar">
                <div className="logo-container" onClick={() => navigate("/")}>
                    <LogogSVG />
                </div>
            </div>
            <div className="login-signup-form">
                {isLogin ? (
                    <div className="form-section">
                        <h2>Login</h2>
                        <form>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit" className="form-button">
                                Login
                            </button>
                        </form>
                        <p className="toggle-message">
                            Don't have an account?{" "}
                            <span onClick={() => setIsLogin(false)}>Create</span>
                        </p>
                    </div>
                ) : (
                    <div className="form-section">
                        <h2>Create an account.</h2>
                        <form>
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="tel" placeholder="Phone Number" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit" className="form-button">
                                Create
                            </button>
                        </form>
                        <p className="toggle-message">
                            Already have an account?{" "}
                            <span onClick={() => setIsLogin(true)}>Login</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginSignUp;
