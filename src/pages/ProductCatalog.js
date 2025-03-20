import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { getReviews } from "../services/reviewService";

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
        <div className="container mt-5">
            <h2>Product Catalog</h2>
            <input
                type="text"
                placeholder="Search products..."
                className="form-control mb-3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductCatalog;