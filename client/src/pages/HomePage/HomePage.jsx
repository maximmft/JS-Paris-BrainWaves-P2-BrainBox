import React, { useState } from 'react';
import './Homepage.css'; 

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['History', 'Sport', 'Pop culture', 'Geography', 'Nature', 'Art'];
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="category-list">
        {filteredCategories.map((category, index) => (
          <div key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
