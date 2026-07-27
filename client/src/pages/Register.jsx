import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/register", {
                name,
                email,
                phone,
                password,
            });

            alert(response.data.message || "Registration Successful");

            navigate("/");
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
            <h1>Register</h1>

            <form onSubmit={handleRegister}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Register
                </button>

            </form>

            <p>
                Already have an account?{" "}
                <Link to="/">Login</Link>
            </p>

        </div>
    );
}

export default Register;