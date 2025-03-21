import axios from "axios";

// ✅ Base URL for the backend
const API_URL = "http://localhost:8080/user"; // change to HTTPS in prod if needed

// ✅ Helper to generate Basic Auth header
const basicAuthHeader = () => {
    const username = "auth_user";    // 🔁 Replace with your actual auth user
    const password = "auth_pass";    // 🔁 Replace with your actual auth password
    return `Basic ${btoa(`${username}:${password}`)}`;
};

// ✅ Login user
export const login = async (user_name, password) => {
    const response = await axios.post(
        `${API_URL}/login`,
        { user_name, password },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: basicAuthHeader(),
            },
        }
    );
    return response.data;
};

// ✅ Register user
export const register = async (userData) => {
    const response = await axios.post(
        `${API_URL}/register`,
        userData,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: basicAuthHeader(),
            },
        }
    );
    return response.data;
};

// ✅ Get user by username
export const getUser = async (userName) => {
    const response = await axios.get(`${API_URL}/${userName}`, {
        headers: {
            Authorization: basicAuthHeader(),
        },
    });
    return response.data;
};

// ✅ Validate JWT token
export const validateToken = async (token) => {
    const response = await axios.post(
        `${API_URL}/validate-token`,
        { token },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: basicAuthHeader(),
            },
        }
    );
    return response.data;
};