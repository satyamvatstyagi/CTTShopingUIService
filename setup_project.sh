#!/bin/bash

# Set project name
PROJECT_NAME="src"

# Create main project folder
mkdir -p $PROJECT_NAME

# Navigate into the project
cd $PROJECT_NAME

# Create core directories
mkdir -p public src assets components pages context redux/hooks services styles utils

# Create Redux subdirectories
mkdir -p redux/slices

# Create essential files
touch .env .gitignore README.md package.json

# Create public directory files
touch public/index.html public/favicon.ico

# Create main app files
touch src/App.js src/index.js

# Create component files
touch components/Navbar.js components/Footer.js components/ProductCard.js components/SearchBar.js

# Create pages
touch pages/Home.js pages/Login.js pages/Register.js pages/ProductCatalog.js
touch pages/Cart.js pages/Checkout.js pages/AdminDashboard.js pages/ContactUs.js

# Create Context API files
touch context/AuthContext.js context/CartContext.js

# Create Redux store and slices
touch redux/store.js redux/slices/authSlice.js redux/slices/cartSlice.js

# Create hooks
touch hooks/useAuth.js hooks/useCart.js

# Create services
touch services/authService.js services/productService.js services/orderService.js

# Create styles
touch styles/bootstrap.css styles/global.css

# Create utility files
touch utils/helpers.js utils/constants.js

echo "✅ React project directory structure created successfully!"
echo "Navigate to '$PROJECT_NAME' and start coding!"
