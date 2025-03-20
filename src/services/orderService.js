import axios from "axios";

const API_URL = "https://api.example.com/orders";

export const createOrder = async (orderData) => {
    const response = await axios.post(API_URL, orderData);
    return response.data;
};

export const getOrderHistory = async (userId) => {
    const response = await axios.get(`${API_URL}/history/${userId}`);
    return response.data;
};

export const getOrderStatus = async (orderId) => {
    const response = await axios.get(`https://api.example.com/orders/status/${orderId}`);
    return response.data;
};
