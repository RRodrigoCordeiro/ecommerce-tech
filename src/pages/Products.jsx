import React, { useState } from 'react';
import productsData from '../data/products.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getFilteredProducts = () => {
    let filteredProducts = productsData.products;

    if (filter === 'launch') {
      filteredProducts = filteredProducts.filter(product => product.launch);
    } else if (filter === 'promotion') {
      filteredProducts = filteredProducts.filter(product => product.promotion);
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
    }

    return filteredProducts;
  };
  return (
    <div>
        <Header/>
        <div className="container mx-auto p-4">
    
    <div className="mb-4">
      <button onClick={() => setFilter('launch')} className="bg-blue-500 text-white py-2 px-4 rounded mr-4">
        Lançamentos
      </button>
      <button onClick={() => setFilter('promotion')} className="bg-green-500 text-white py-2 px-4 rounded">
        Promoções
      </button>
    </div>

 
    <div className="mb-4">
      <input 
        type="text"
        placeholder="Pesquisar produtos"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>

   
    <div className="grid grid-cols-3 gap-8">
      {getFilteredProducts().map(product => (
        <div key={product.id} className="border p-6">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p>{product.description}</p>
          <p className="font-bold">R${product.price}</p>
          <p>Avaliação: {product.rating} estrelas</p>
          <p>{product.stock} em estoque</p>
        </div>
      ))}
    </div>
  </div>
      
     <Footer/>
    </div>
  )
}

export default Products