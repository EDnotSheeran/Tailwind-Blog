import React from 'react';

const Container: React.FC = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      {children}
    </div>
  );
};

export default Container;
