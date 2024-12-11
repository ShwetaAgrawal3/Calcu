import React, { useState, useEffect } from 'react';
import './DetailedCostsModal.css';
import Headers from './Headers';

const DetailedCostsModal = ({ data, onClose }) => {
  const [sliderValue, setSliderValue] = useState(1);

  // Add these state variables to save the initial configuration
  const [initialData, setInitialData] = useState(null);

  // Save the initial configuration when the component mounts
  useEffect(() => {
    if (!initialData && data) {
      setInitialData(data);
    }
  }, [data]);

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value, 10));
  };

  // Define the order of products
  const productOrder = ['ce_products', 'cloud_storage_products','filestore_products', 'db_products', 'bq_products', 'dFlow_products', 'gclb_products', 'lStorage_products']; // Add more products as needed
  const subProductOrder = {
    ce_products: ['sizeNodes', 'numClusters', 'bootDiskSize'],
    storage_products: ['storageType', 'storageVolume', 'storageClassA', 'storageClassB', 'storageRegionEgress', 'storageInetEgress', 'storageFileBackup']
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="slider-container">
          <input
            type="range"
            min="1"
            max="12"
            step="1"
            value={sliderValue}
            onChange={handleSliderChange}
            className="slider"
          />
          <span className="slider-value">{sliderValue} month(s)</span>
        </div>
        <Headers level={2} text="Details" className="left-align" />
        {productOrder.map((productKey) => (
          data.Product && data.Product[productKey] && (
            <React.Fragment key={productKey}>
              <Headers level={3} text={productKey} className="left-align" />
              <table>
                <thead>
                  <tr>
                    <th>Subproduct</th>
                    <th>Cost With Uplift Excl Vat</th>
                    <th>Cost Vat Rate</th>
                    <th>Cost Incl Vat</th>
                    <th>Cost {sliderValue} month(s)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(data.Product[productKey]).map(([subProductKey, val]) => {
                    const initialVal = initialData?.Product?.[productKey]?.[subProductKey]?.cost_incl_vat || 0;
                    const change = val.cost_incl_vat - initialVal;
                    const initialMonthlyVal = initialData?.Product?.[productKey]?.[subProductKey]?.cost_incl_vat * sliderValue || 0;
                    const monthlyChange = (val.cost_incl_vat * sliderValue) - initialMonthlyVal;
                    return (
                      <tr key={subProductKey}>
                        <td>{subProductKey}</td>
                        <td>{val.cost_with_uplift_excl_vat.toFixed(2)}</td>
                        <td>{val.cost_vat_rate.toFixed(2)}</td>
                        <td>{val.cost_incl_vat.toFixed(2)}</td>
                        
                        <td>{(val.cost_incl_vat * sliderValue).toFixed(2)}</td>
                        
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </React.Fragment>
          )
        ))}
        <h3>Grand Total: {(data.grand_total * sliderValue).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default DetailedCostsModal;