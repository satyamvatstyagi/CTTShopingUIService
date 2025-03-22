// src/services/cartService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_CART_API_URL;

const basicAuthHeader = () => {
    const username = process.env.REACT_APP_AUTH_USERNAME;
    const password = process.env.REACT_APP_AUTH_PASSWORD;
    return `Basic ${btoa(`${username}:${password}`)}`;
};

// ✅ Get cart for a user
export const getCart = async (userId) => {
    const response = await axios.get(`${API_URL}?user_id=${userId}`, {
        headers: {
            Authorization: basicAuthHeader(),
        },
    });
    return response.data;
};
