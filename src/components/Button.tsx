import React from 'react';

const Button: React.FC = ({ children }) => {
  return (
    <button className="bg-blue-300 hover:bg-blue-400 text-white py-2 px-3 rounded-md">
      Click me
    </button>
  );
};

export default Button;
