import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const ProductItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('https://api.airtable.com/v0/appflb9FgqljqiuIe/ProductList', {
        headers: {
          Authorization: `Bearer ${process.env.key4vlp0WIH1Em5oB}`,
        },
      });

      setProducts(res.data.records);
    };

    fetchProducts();
  }, []);

  return <ProductList products={products} />;
};

export default ProductItem;
