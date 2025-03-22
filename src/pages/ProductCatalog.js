import React, { useEffect, useState, useContext } from "react";
import { getProducts } from "../services/productService";
import { addToCart } from "../services/cartService";
import ProductCard from "../components/ProductCard";
import { AuthContext } from "../context/AuthContext";

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const { user } = useContext(AuthContext); // ✅ get logged-in user

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await getProducts();
                setProducts(productData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchData();
    }, []);

    const handleAddToCart = async (product) => {
        if (!user) {
            alert("Please login to add items to cart.");
            return;
        }

        try {
            await addToCart(user.user_name, product); // ✅ use username as user_id
            alert(`${product.name} added to cart ✅`);
        } catch (err) {
            console.error("Add to cart failed:", err);
            alert("Failed to add item to cart.");
        }
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="d-flex flex-column min-vh-100">
            <main className="container flex-grow-1 py-5">
                <h2 className="mb-4 text-center">🛍️ Product Catalog</h2>

                <input
                    type="text"
                    placeholder="Search products..."
                    className="form-control mb-4"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {filteredProducts.length === 0 ? (
                    <p className="text-center text-muted">No products match your search.</p>
                ) : (
                    <div className="row">
                        {filteredProducts.map((product) => (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <ProductCard
                                    product={product}
                                    onAddToCart={handleAddToCart}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default ProductCatalog;
