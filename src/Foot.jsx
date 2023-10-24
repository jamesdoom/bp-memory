import React from 'react';

const Foot = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="foot">
      <p>&copy; {currentYear} Brian Palmer</p>
    </footer>
  );
};

export default Foot;
