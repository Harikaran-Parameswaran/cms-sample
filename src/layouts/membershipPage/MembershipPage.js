import React, { useState } from "react";
import { useNavigate } from "react-router";
import './MembershipPage.css'
import { LogogSVG } from "../../SVGIcons/LogoSVG";

const MembershipPage = () => {
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState(null);

    const membershipPlans = [
        {
            id: "monthly",
            title: "Monthly",
            price: "£5.99",
            discountedPrice: "£2",
            description: [
                "7 days free, then £2/month for the first 2 months‡",
                "Watch ad-free*",
                "Download shows on mobile",
                "Cancel anytime†",
            ],
        },
        {
            id: "annual",
            title: "Annual",
            price: "£59.99",
            discountedPrice: null,
            description: [
                "Save more with the annual plan",
                "Watch ad-free*",
                "Download shows on mobile",
                "Cancel anytime†",
            ],
        },
    ];

    const handlePlanSelect = (id) => {
        setSelectedPlan(id);
    };

    return (
        <div className="membership-page">

            <div className="navbar">
                <div className="logo-container" onClick={() => navigate("/")}>
                    <LogogSVG />
                </div>
            </div>

            <h1 className="membership-page-title">Want to become a member? Choose a suitable plan.</h1>
            <p className="membership-subtitle">Choose your plan</p>
            <div className="membership-options">
                {membershipPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`membership-card ${selectedPlan === plan.id ? "selected" : ""
                            }`}
                        onClick={() => handlePlanSelect(plan.id)}
                    >
                        <div className="membership-header">
                            <div className="membership-radio">
                                <input
                                    type="radio"
                                    id={plan.id}
                                    name="membership"
                                    checked={selectedPlan === plan.id}
                                    readOnly
                                />
                                <label htmlFor={plan.id}></label>
                            </div>
                            <h2 className="membership-title">{plan.title}</h2>
                            {plan.discountedPrice && (
                                <p className="membership-discounted-price">
                                    <span className="original-price">{plan.price}</span> {plan.discountedPrice} a month
                                </p>
                            )}
                            {!plan.discountedPrice && (
                                <p className="membership-price">{plan.price} a year</p>
                            )}
                        </div>
                        <ul className="membership-description">
                            {plan.description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button className="proceed-button">Proceed</button>
            </div>

            <div className="membership-disclaimer">
                <p>* Ad-free experience may not apply to all content due to licensing agreements.</p>
                <p>† Cancel anytime. Access remains until the end of the billing cycle. No refunds for partial periods.</p>
                <p>‡ Promotional offers are available for new subscribers only and are subject to change.</p>
            </div>
        </div>
    );
};

export default MembershipPage;
