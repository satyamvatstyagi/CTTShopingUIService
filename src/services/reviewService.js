import axios from "axios";

const API_URL = "https://api.example.com/reviews";

export const getReviews = async (productId) => {
    const response = await axios.get(`${API_URL}/product/${productId}`);
    return response.data;
};

export const submitReview = async (reviewData) => {
    const response = await axios.post(`${API_URL}/submit`, reviewData);
    return response.data;
};