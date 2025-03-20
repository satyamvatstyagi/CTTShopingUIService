import axios from "axios";

const API_URL = "https://api.example.com/payments";

export const processPayment = async (paymentData) => {
    const response = await axios.post(`${API_URL}/process`, paymentData);
    return response.data;
};

export const getPaymentStatus = async (orderId) => {
    const response = await axios.get(`${API_URL}/status/${orderId}`);
    return response.data;
};