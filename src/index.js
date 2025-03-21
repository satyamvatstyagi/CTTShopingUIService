import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Import Bootstrap first (official or your customized one)
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap from CDN (optional if you use your own)
import './styles/bootstrap.css'; // your custom Bootstrap overrides (optional)

// ✅ Import your custom global styles
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);