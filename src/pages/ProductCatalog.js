import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar"; // ✅ import the new component

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await getProducts();
                setProducts(productData);
                setFilteredProducts(productData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [search, products]);

    const handleAddToCart = (product) => {
        console.log("Add to cart clicked:", product);
        // You can connect this to CartContext later
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <main className="container flex-grow-1 py-5">
                <h2 className="mb-4 text-center">🛍️ Product Catalog</h2>

                {/* ✅ Reusable SearchBar */}
                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder="Search products..."
                />

                {filteredProducts.length === 0 ? (
                    <p className="text-center text-muted">No products match your search.</p>
                ) : (
                    <div className="row">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default ProductCatalog;