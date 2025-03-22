import axios from "axios";

// ✅ Load environment variables
const API_URL = process.env.REACT_APP_USER_API_URL;

const basicAuthHeader = () => {
    const username = process.env.REACT_APP_AUTH_USERNAME;
    const password = process.env.REACT_APP_AUTH_PASSWORD;
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