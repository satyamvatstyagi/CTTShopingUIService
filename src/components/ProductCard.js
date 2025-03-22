import React, { useState } from "react";

const DEFAULT_IMAGE = "https://cdn-icons-png.flaticon.com/512/891/891419.png";

const ProductCard = ({ product, onAddToCart }) => {
    const [imgSrc, setImgSrc] = useState(product.image_url || DEFAULT_IMAGE);

    const handleImageError = () => {
        if (imgSrc !== DEFAULT_IMAGE) {
            setImgSrc(DEFAULT_IMAGE);
        }
    };

    return (
        <div className="card h-100 shadow-sm">
            <img
                src={imgSrc}
                alt={product?.name || "Product Image"}
                className="card-img-top"
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    padding: "10px",
                    backgroundColor: "#f8f9fa"
                }}
                onError={handleImageError}
            />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product?.name || "Unnamed Product"}</h5>
                <p className="text-muted mb-2">
                    ₹{product?.price?.toLocaleString("en-IN") || "N/A"}
                </p>
                <button
                    className="btn btn-outline-primary mt-auto"
                    onClick={() => onAddToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
