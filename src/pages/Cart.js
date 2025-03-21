import React from "react";

const Cart = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <main className="flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="container text-center" style={{ maxWidth: "600px" }}>
                    <h2 className="mb-4">🛒 Your Shopping Cart</h2>
                    <div className="alert alert-info" role="alert">
                        Your cart is currently empty. Start adding some products!
                    </div>
                    <p className="text-muted">Browse our products and add items to your cart.</p>
                </div>
            </main>

            <footer className="bg-dark text-light text-center py-3 mt-auto">
                <small>&copy; 2025 CTT Shopping. All rights reserved.</small>
            </footer>
        </div>
    );
};

export default Cart;