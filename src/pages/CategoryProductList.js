import React, { useEffect, useState } from "react";
import { getCategories, getProductsByCategory } from "../services/productService";
import ProductCard from "../components/ProductCard";

const CategoryProductList = () => {
    const [productsByCategory, setProductsByCategory] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const categories = await getCategories();
                console.log("Fetched categories:", categories);
                const categoryMap = {};

                for (const category of categories) {
                    const products = await getProductsByCategory(category);
                    categoryMap[category] = products;
                }

                setProductsByCategory(categoryMap);
                setLoading(false);
            } catch (err) {
                console.error("Error loading products by category:", err);
                setLoading(false);
            }
        };

        fetchAll();
    }, []);

    const handleAddToCart = (product) => {
        console.log("Add to cart clicked:", product);
    };

    if (loading) return <p className="text-center">Loading products...</p>;

    return (
        <div className="container mt-5">
            {Object.entries(productsByCategory).map(([category, products]) => (
                <div key={category} className="mb-5">
                    <h3 className="mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <ProductCard product={product} onAddToCart={handleAddToCart} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryProductList;
