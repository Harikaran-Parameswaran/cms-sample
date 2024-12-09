import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router";
import "./QRScreen.css";
import { LogogSVG } from "../../SVGIcons/LogoSVG";

const QRScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="qr-screen">
            <div className="navbar">
                <div className="logo-container" onClick={() => navigate("/")}>
                    <LogogSVG />
                </div>
            </div>
            <h1 className="qr-title">Scan to Continue</h1>
            <div className="qr-code-container">
                <ol>
                    <li>Use your phone to scan the QR Code to become a member. Alternatively, you can visit <a href="http://localhost:3000/membership">http://localhost:3000/membership</a>.</li>
                    <li>Login to your account using the email you're using now.</li>
                </ol>
                <QRCodeSVG value="http://localhost:3000/membership" size={200} />
            </div>
        </div>
    );
};

export default QRScreen;
