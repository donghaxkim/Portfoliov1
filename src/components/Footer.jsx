import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-6 flex flex-col items-center justify-center text-gray-400 text-sm">
      {/* Copyright Section */}
      <div className="border-t border-gray-600 pt-4 w-full text-center">
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-lg">©</span>
          <span>{year} Dongha Kim</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 