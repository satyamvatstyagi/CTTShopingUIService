import React, { useContext } from "react";
import { WishlistContext } from "../WishlistContext"

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);

    return (
        <div className="container mt-5">
            <h2>My Wishlist</h2>
            <ul>
                {wishlist.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button className="btn btn-danger btn-sm" onClick={() => removeFromWishlist(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
