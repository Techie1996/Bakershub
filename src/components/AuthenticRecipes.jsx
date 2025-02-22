import React from 'react';
import './AuthenticRecipes.css';

const AuthenticRecipes = () => {
  return (
<div class="authentic-recipes">
  <div class="content">
    <div class="left">
      <h1>AUTHENTIC RECIPES</h1>
      <p>Our products are based on traditional home-style recipes using fresh ingredients.</p>
      <h2>BAKED WITH LOVE</h2>
      <p>Our passion for baking is poured into every recipe, serving smiles on a plate everyday.</p>
      <h2>COMMITTED TO QUALITY</h2>
      <p>From our ingredients to our kitchen operations & guest services, we always prioritize quality.</p>
      <h2>HONESTLY PRICED</h2>
      <p>We constantly strive to offer the best products at the right prices.</p>
    </div>
    <div class="right">
      <h3>Food of The Gods, Freshly Baked!</h3>
      <p>Since 2004, we've been serving our guests the best quality treats, traditionally made and presented with care.</p>
    </div>
  </div>
  <div class="image-container">
    <img src="https://theobroma.in/cdn/shop/files/theo-home_03c4e3a4-9dc9-4de7-9464-16e655a238ed_2.jpg?v=1630652883" alt="Food Image" />
    <a href="#" class="know-more-btn">Know More</a>
  </div>
</div>

  );
};

export default AuthenticRecipes;