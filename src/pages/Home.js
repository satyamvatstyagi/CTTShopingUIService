import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container text-center mt-5">
            <h1 className="mb-3">Welcome to <span className="text-primary">CTT Online Shopping</span></h1>
            <p className="lead mb-4">Find the best products, deals, and more — all in one place.</p>

            <div className="d-flex justify-content-center gap-3">
                <Link to="/products" className="btn btn-primary btn-lg">
                    Browse Products
                </Link>
                <Link to="/register" className="btn btn-outline-secondary btn-lg">
                    Join Now
                </Link>
            </div>
        </div>
    );
};

export default Home;