import React, { useEffect, useState, useContext } from "react";
import { getCategories, getProductsByCategory } from "../services/productService";
import ProductCard from "../components/ProductCard";
import { AuthContext } from "../context/AuthContext";
import { addToCart } from "../services/cartService";
import { toast } from "react-toastify";

const CategoryProductList = () => {
    const { user } = useContext(AuthContext);
    const [productsByCategory, setProductsByCategory] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categories = await getCategories();
                const categoryMap = {};
                for (const category of categories) {
                    const products = await getProductsByCategory(category);
                    categoryMap[category] = products;
                }
                setProductsByCategory(categoryMap);
            } catch (err) {
                console.error("Failed to fetch products by category", err);
                toast.error("Failed to load categories.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleAddToCart = async (product) => {
        if (!user) {
            toast.warning("Please login to add items to cart.");
            return;
        }

        try {
            await addToCart(user.user_id, {
                product_id: product.id,
                name: product.name,
                price: product.price,
                image_url: product.image_url,
                quantity: 1,
            });
            toast.success(`${product.name} added to cart ✅`);
        } catch (err) {
            console.error("Add to cart failed:", err.response?.data || err.message);
            toast.error("Failed to add item to cart.");
        }
    };

    if (loading) return <div className="text-center mt-5">Loading...</div>;

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">🗂️ Products by Category</h2>
            {Object.entries(productsByCategory).map(([category, products]) => (
                <div key={category} className="mb-5">
                    <h3 className="mb-3">{category}</h3>
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <ProductCard
                                    product={product}
                                    onAddToCart={handleAddToCart}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryProductList;