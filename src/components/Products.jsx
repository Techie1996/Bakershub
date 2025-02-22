import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    { id: 1, title: 'CAKES', image: 'https://picsum.photos/200/300?random=111111' },
    { id: 2, title: 'BROWNIES', image: 'https://picsum.photos/200/300?random=111111' },
    { id: 3, title: 'DESSERTS & CUPCAKES', image: 'https://picsum.photos/200/300?random=111111' },
    { id: 4, title: 'PASTRIES', image: 'https://picsum.photos/200/300?random=111111' },
  ];

  return (
    <section className="products-section">
      <h2 className="section-title">Our Products</h2>
      
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-container">
              <img 
                src={product.image} 
                alt={product.title} 
                className="product-image"
              />
              <div className="image-overlay"></div>
            </div>
            <h3 className="product-title">{product.title}</h3>
          </div>
        ))}
        
      </div>
        {/* <div className="view-more-card">
          <div className="view-more-content">
            <span className="view-more-text">VIEW</span>
            <span className="view-more-text">MORE</span>
          </div>
        </div> */}
    </section>
  );
};

export default Products;