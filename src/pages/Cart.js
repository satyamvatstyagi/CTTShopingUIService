import React, { useEffect, useState, useContext } from "react";
import { getCart } from "../services/cartService";
import { AuthContext } from "../context/AuthContext";

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            if (!user?.user_name) {
                setLoading(false);
                return;
            }

            try {
                const res = await getCart(user.user_name); // ✅ use username as user_id
                setCartItems(res.items || []);
            } catch (err) {
                console.error("Failed to fetch cart:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, [user]);

    const getTotal = () =>
        cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="d-flex flex-column min-vh-100">
            <main className="flex-grow-1 container py-5">
                <h2 className="mb-4 text-center">🛒 Your Shopping Cart</h2>

                {!user ? (
                    <div className="alert alert-warning text-center">
                        Please login to view your cart.
                    </div>
                ) : loading ? (
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
