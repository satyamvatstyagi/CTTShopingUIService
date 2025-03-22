import React, { useEffect, useState } from "react";
import { getCategories, getProductsByCategory } from "../services/productService";
import ProductCard from "../components/ProductCard";

const CategoryProductList = () => {
    const [productsByCategory, setProductsByCategory] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categories = await getCategories();
                console.log("Fetched categories:", categories);
                const categoryMap = {};

                for (const category of categories) {
                    const products = await getProductsByCategory(category);
                    categoryMap[category] = products;
                }

                setProductsByCategory(categoryMap);
            } catch (err) {
                console.error("Failed to fetch products by category", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = (product) => {
        console.log("Add to cart clicked:", product);
        // Later: integrate with CartContext
    };

    if (loading) return <div className="text-center mt-5">Loading products by category...</div>;

    if (Object.keys(productsByCategory).length === 0) {
        return <div className="text-center mt-5 text-muted">No categories found.</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">🗂️ Products by Category</h2>

            {Object.entries(productsByCategory).map(([category, products]) => (
                <div key={category} className="mb-5">
                    <h3 className="mb-3">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
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
