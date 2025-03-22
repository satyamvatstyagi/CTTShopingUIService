// src/pages/Cart.js
import React, { useEffect, useState } from "react";
import { getCart } from "../services/cartService";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [userId] = useState("satyamvats"); // later, get from auth context or localStorage
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await getCart(userId);
                setCartItems(res.items || []);
            } catch (err) {
                console.error("Failed to fetch cart:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchCart();
    }, [userId]);

    const getTotal = () =>
        cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="d-flex flex-column min-vh-100">
            <main className="flex-grow-1 container py-5">
                <h2 className="mb-4 text-center">🛒 Your Shopping Cart</h2>

                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : cartItems.length === 0 ? (
                    <div className="alert alert-info text-center">
                        Your cart is currently empty. Start adding some products!
                    </div>
                ) : (
                    <>
                        <ul className="list-group mb-4">
                            {cartItems.map((item) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={item.product_id}>
                                    <div>
                                        <strong>{item.name}</strong> <br />
                                        <small>₹{item.price} x {item.quantity}</small>
                                    </div>
                                    <span className="badge bg-primary rounded-pill">
                                        ₹{item.price * item.quantity}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <h5 className="text-end">Total: ₹{getTotal().toFixed(2)}</h5>
                    </>
                )}
            </main>

            <footer className="bg-dark text-light text-center py-3 mt-auto">
                <small>&copy; 2025 CTT Shopping. All rights reserved.</small>
            </footer>
        </div>
    );
};

export default Cart;
