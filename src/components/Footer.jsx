import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-6 flex flex-col items-center justify-center text-gray-400 text-sm">
      <div className="flex items-center gap-2">
        <span className="text-lg">©</span>
        <span>{year} Dongha Kim</span>
      </div>
    </footer>
  );
};

export default Footer; 