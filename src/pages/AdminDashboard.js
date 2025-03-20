import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { getOrderHistory } from "../services/orderService";

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productData = await getProducts();
            const orderData = await getOrderHistory("all");
            setProducts(productData);
            setOrders(orderData);
        };
        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Admin Dashboard</h2>
            <h3>Manage Products</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
            <h3>Order History</h3>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>Order #{order.id} - {order.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;