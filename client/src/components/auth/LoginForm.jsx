import { Link } from "react-router-dom";

function LoginForm({
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
}) {
    return (
        <div className="login-card">

            <h2>Welcome Back 👋</h2>

            <p className="login-subtitle">
                Login to continue managing your finances.
            </p>

            <form onSubmit={handleLogin}>

                <div className="form-group">
                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="login-btn"
                >
                    Login
                </button>

            </form>

            <p className="register-link">
                Don't have an account?{" "}
                <Link to="/register">
                    Create Account
                </Link>
            </p>

        </div>
    );
}

export default LoginForm;