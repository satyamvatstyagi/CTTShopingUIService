import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginAPI } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(""); // ✅ Added success state

    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // ✅ context login function

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const res = await loginAPI(userName, password);
            setSuccess("Login successful!");
            localStorage.setItem("token", res.data?.token || "");

            // ✅ Save user info in AuthContext
            login({
                user_name: userName,
                user_id: res.data.id,
            });

            navigate("/");
        } catch (err) {
            console.error("Login failed:", err);
            setError("Invalid username or password");
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <main className="flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="container" style={{ maxWidth: "400px" }}>
                    <h2 className="mb-4 text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="form-label">Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}
                        <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
                    </form>
                </div>
            </main>

            <footer className="bg-dark text-light text-center py-3 mt-auto">
                <small>&copy; {new Date().getFullYear()} CTT Shopping. All rights reserved.</small>
            </footer>
        </div>
    );
};

export default Login;