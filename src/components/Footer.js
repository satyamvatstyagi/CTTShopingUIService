import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            &copy; {new Date().getFullYear()} CTT Online Shopping. All Rights Reserved.
        </footer>
    );
};

export default Footer;