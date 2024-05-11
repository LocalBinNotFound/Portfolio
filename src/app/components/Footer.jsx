import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-borderColor border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                <span><Image src="/images/logo.png" alt="my logo" width={50} height={50}/></span>
                <p className="text-slate-600 ml-12 text-center">© 2024 LocalBinNotFound. All rights reserved.</p>
            </div>
        </footer>);
};

export default Footer;