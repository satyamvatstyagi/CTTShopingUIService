import React, { useEffect, useState, useContext } from "react";
import { getCart, removeFromCart, clearCart } from "../services/cartService";
import { AuthContext } from "../context/AuthContext";

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const userId = user?.user_id;

    const fetchCart = async () => {
        if (!userId) {
            setLoading(false);
            return;
        }

        try {
            const res = await getCart(userId);
            setCartItems(res.items || []);
        } catch (err) {
            console.error("Failed to fetch cart:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, [userId]);

    const handleRemoveItem = async (productId) => {
        try {
            await removeFromCart(userId, productId);
            fetchCart();
        } catch (err) {
            console.error("Failed to remove item:", err);
        }
    };

    const handleClearCart = async () => {
        try {
            await clearCart(userId);
            setCartItems([]);
        } catch (err) {
            console.error("Failed to clear cart:", err);
        }
    };

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
                                    <div className="d-flex align-items-center">
                                        <span className="badge bg-primary rounded-pill me-3">
                                            ₹{item.price * item.quantity}
                                        </span>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => handleRemoveItem(item.product_id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Total: ₹{getTotal().toFixed(2)}</h5>
                            <button className="btn btn-danger" onClick={handleClearCart}>
                                Clear Cart
                            </button>
                        </div>
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
