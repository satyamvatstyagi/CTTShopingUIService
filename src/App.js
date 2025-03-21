import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductCatalog from "./pages/ProductCatalog";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import ContactUs from "./pages/ContactUs";
import UserProfile from "./pages/UserProfile";
import Wishlist from "./pages/Wishlist";
import OrderTracking from "./pages/Ordertracking";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <WishlistProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                {/* Public Pages */}
                                <Route index element={<Home />} />
                                <Route path="login" element={<Login />} />
                                <Route path="register" element={<Register />} />
                                <Route path="products" element={<ProductCatalog />} />
                                <Route path="cart" element={<Cart />} />
                                <Route path="contact" element={<ContactUs />} />

                                {/* Protected Pages */}
                                <Route
                                    path="checkout"
                                    element={
                                        <ProtectedRoute>
                                            <Checkout />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="admin"
                                    element={
                                        <ProtectedRoute adminOnly>
                                            <AdminDashboard />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="profile"
                                    element={
                                        <ProtectedRoute>
                                            <UserProfile />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="wishlist"
                                    element={
                                        <ProtectedRoute>
                                            <Wishlist />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="order-tracking"
                                    element={
                                        <ProtectedRoute>
                                            <OrderTracking />
                                        </ProtectedRoute>
                                    }
                                />
                            </Route>
                        </Routes>
                    </Router>
                </WishlistProvider>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;