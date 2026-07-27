import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // We'll write this next
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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">
                    Login
                </button>
            </form>
            <p>
                Don't have an account?{" "}
                <Link to="/register">Register</Link>
            </p>
        </div>
    );
}

export default Login;