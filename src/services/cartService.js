import axios from "axios";

const API_URL = process.env.REACT_APP_CART_API_URL;

const basicAuthHeader = () => {
    const username = process.env.REACT_APP_AUTH_USERNAME;
    const password = process.env.REACT_APP_AUTH_PASSWORD;
    return `Basic ${btoa(`${username}:${password}`)}`;
};

// ✅ Get cart for a user
export const getCart = async (userId) => {
    const response = await axios.get(`${API_URL}/?user_id=${userId}`, {
        headers: {
            Authorization: basicAuthHeader(),
        },
    });
    return response.data;
};

// ✅ Add item to cart
export const addToCart = async (userId, item) => {
    const response = await axios.post(`${API_URL}/add?user_id=${userId}`, item, {
        headers: {
            "Content-Type": "application/json",
            Authorization: basicAuthHeader(),
        },
    });
    return response.data;
};

// ✅ Remove item from cart
export const removeFromCart = async (userId, productId) => {
    const response = await axios.delete(
        `${API_URL}/remove/${productId}?user_id=${userId}`,
        {
            headers: {
                Authorization: basicAuthHeader(),
            },
        }
    );
    return response.data;
};

// ✅ Clear entire cart
export const clearCart = async (userId) => {
    const response = await axios.delete(
        `${API_URL}/clear?user_id=${userId}`,
        {
            headers: {
                Authorization: basicAuthHeader(),
            },
        }
    );
    return response.data;
};
