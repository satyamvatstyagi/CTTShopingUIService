import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
// import { getReviews } from "../services/reviewService"; // keep if you want to use later

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const productData = await getProducts();
            setProducts(productData);
            setFilteredProducts(productData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredProducts(
            products.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, products]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <main className="container flex-grow-1 py-5">
                <h2 className="mb-4 text-center">🛍️ Product Catalog</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="form-control"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {filteredProducts.length === 0 ? (
                    <p className="text-center text-muted">No products match your search.</p>
                ) : (
                    <div className="row">
                        {filteredProducts.map((product) => (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text text-muted mb-2">${product.price.toFixed(2)}</p>
                                        <p className="card-text">{product.description}</p>
                                        {/* Optional: Add rating, review count, or button */}
                                        <button className="btn btn-outline-primary mt-auto">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <footer className="bg-dark text-light text-center py-3 mt-auto">
                <small>&copy; 2025 CTT Shopping. All rights reserved.</small>
            </footer>
        </div>
    );
};

export default ProductCatalog;