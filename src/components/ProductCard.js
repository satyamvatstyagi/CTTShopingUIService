import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                {/* Optional product image */}
                {product.image && (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="card-img-top"
                        style={{ objectFit: "cover", height: "200px" }}
                    />
                )}

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted mb-2">${product.price.toFixed(2)}</p>
                    <p className="card-text">{product.description}</p>
                    <button
                        className="btn btn-outline-primary mt-auto"
                        onClick={() => onAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;