import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import HeroSection from "../components/auth/HeroSection";
import LoginForm from "../components/auth/LoginForm";
import Features from "../components/auth/Features";
import HowItWorks from "../components/auth/HowItWorks";
import Footer from "../components/auth/Footer";

import "../styles/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert(error.message);
            }
        }
    };

    return (
        <div className="login-page">

            <HeroSection>

                <LoginForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                />

            </HeroSection>

            <Features />

            <HowItWorks />

            <Footer />

        </div>
    );
}

export default Login;