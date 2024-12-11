import React, { useState } from 'react';
import './ProductSelectionModal.css';

const ProductSelectionModal = ({ onClose, onProductToggle, selectedProducts }) => {
  const [tempSelectedProducts, setTempSelectedProducts] = useState([...selectedProducts]);

  const handleOverlayClick = (e) => {
    if (e.target.className === 'tile-modal-overlay') {
      handleSubmit();
    }
  };

  const handleProductClick = (product) => {
    setTempSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.includes(product)
        ? prevSelectedProducts.filter((p) => p !== product)
        : [...prevSelectedProducts, product]
    );
  };

  const handleSubmit = () => {
    const newSelectedProducts = [...tempSelectedProducts];
    selectedProducts.forEach(product => {
      if (!newSelectedProducts.includes(product)) {
        onProductToggle(product);
      }
    });
    newSelectedProducts.forEach(product => {
      if (!selectedProducts.includes(product)) {
        onProductToggle(product);
      }
    });
    onClose();
  };

  const products = [
    { product: 'CEComponent', displayText: 'CE Component' },
    // { product: 'StorageComponent', displayText: 'Storage Component' },
    { product: 'CloudStorageComponent', displayText: 'Cloud Storage' },
    { product: 'DBComponent', displayText: 'DB' },
    { product: 'BQComponent', displayText: 'BQ' },
    { product: 'DFlowComponent', displayText: 'Dataflow' },
    { product: 'GCLBComponent', displayText: 'Google Cloud Load Balancer' },
    { product: 'LStorageComponent', displayText: 'Log Storage' },
    { product: 'FilestoreComponent', displayText: 'Filestore' },
    { product: 'Product8', displayText: 'Product 8' },
  ];

  return (
    <div className="tile-modal-overlay" onClick={handleOverlayClick}>
      <div className="tile-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleSubmit}>×</button>
        <h2>Select an Option</h2>
        <div className="tile-buttons">
          {products.map(({ product, displayText }) => (
            <button
              key={product}
              className={`tile-button ${tempSelectedProducts.includes(product) ? 'selected' : ''}`}
              onClick={() => handleProductClick(product)}
            >
              {displayText}
            </button>
          ))}
        </div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ProductSelectionModal;