import axios from "axios";

// ✅ Load environment variables
const API_URL = process.env.REACT_APP_PRODUCT_API_URL;

const basicAuthHeader = () => {
    const username = process.env.REACT_APP_AUTH_USERNAME;
    const password = process.env.REACT_APP_AUTH_PASSWORD;
    return `Basic ${btoa(`${username}:${password}`)}`;
};

// ✅ Get all products
export const getProducts = async () => {
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: basicAuthHeader(),
        },
    });
    return response.data;
};

// ✅ Get products by category
export const getProductsByCategory = async (category) => {
    const response = await axios.get(`${API_URL}?category=${category}`, {
        headers: {
            Authorization: basicAuthHeader(),
        },
    });
    return response.data;
};

// ✅ Get all unique categories
export const getCategories = async () => {
    const response = await axios.get(`${API_URL}/categories`, {
        headers: {
            Authorization: basicAuthHeader(),
        },
    });
    return response.data.categories;
};

// ✅ Create a new product
export const createProduct = async (productData) => {
    const response = await axios.post(`${API_URL}/`, productData, {
        headers: {
            "Content-Type": "application/json",
            Authorization: basicAuthHeader(),
        },
    });
    return response.data;
};
