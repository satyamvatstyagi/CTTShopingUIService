const { user } = useContext(AuthContext);

const handleAddToCart = async (product) => {
    if (!user) {
        alert("Please login to add items to cart.");
        return;
    }

    try {
        await addToCart(user.user_name, product);
        alert(`${product.name} added to cart ✅`);
    } catch (err) {
        console.error("Add to cart failed:", err);
        alert("Failed to add item to cart.");
    }
};
