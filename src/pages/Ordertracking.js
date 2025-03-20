import React, { useState } from "react";
import { getOrderStatus } from "../services/orderService";

const OrderTracking = () => {
    const [orderId, setOrderId] = useState("");
    const [orderStatus, setOrderStatus] = useState(null);

    const trackOrder = async () => {
        const status = await getOrderStatus(orderId);
        setOrderStatus(status);
    };

    return (
        <div className="container mt-5">
            <h2>Track Your Order</h2>
            <input
                type="text"
                placeholder="Enter Order ID"
                className="form-control mb-3"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
            />
            <button className="btn btn-primary" onClick={trackOrder}>Track Order</button>
            {orderStatus && <p className="mt-3">Status: {orderStatus.status}</p>}
        </div>
    );
};

export default OrderTracking;