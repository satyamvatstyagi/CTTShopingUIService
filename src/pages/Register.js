import React, { useState } from "react";
import { register } from "../services/authService"; // Make sure this path is correct

const Register = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await register(formData);
            console.log("User registered:", response);
            setSuccess("Registration successful!");
        } catch (err) {
            console.error("Registration error:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <main className="flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="container" style={{ maxWidth: "500px" }}>
                    <h2 className="mb-4 text-center">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username:</label>
                            <input
                                type="text"
                                name="user_name"
                                className="form-control"
                                value={formData.user_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}

                        <button type="submit" className="btn btn-primary w-100 mt-2">
                            Register
                        </button>
                    </form>
                </div>
            </main>

            <footer className="bg-dark text-light text-center py-3 mt-auto">
                <small>&copy; 2025 CTT Shopping. All rights reserved.</small>
            </footer>
        </div>
    );
};

export default Register;