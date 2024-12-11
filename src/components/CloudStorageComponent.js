import React from 'react';
import Headers from './Headers';

const CloudStorageComponent = ({
  storageAmount,
  storageClassA,
  storageClassB,
  storageTransfer,
  handleStorageAmountChange,
  handleStorageClassAChange,
  handleStorageClassBChange,
  handleStorageTransferChange
}) => {
  return (
    <div className="input-section">
      <Headers level={2} text='Cloud Storage' className="header-primary"/>
      <label className="label">Total Amount of Storage (in GiB):</label>
      <input
        type="number"
        value={storageAmount}
        onChange={handleStorageAmountChange}
        className="input-field"
        min="0"
        step="10" // Change steps if necessary
      />
      {/* Class A & B operations might want to change to tens- or hundreds of thousands */}
      <label className="label">Class A operations per month (in 1000s):</label> 
      <input
        type="number"
        value={storageClassA}
        onChange={handleStorageClassAChange}
        className="input-field"
        min="0"
        step="100" // Change steps if necessary
      />
      <label className="label">Class B operations per month (in 1000s):</label>
      <input
        type="number"
        value={storageClassB}
        onChange={handleStorageClassBChange}
        className="input-field"
        min="0"
        step="100" // Change steps if necessary
      /> 
      <label className="label">Data Transfer within Google Cloud (in GiB):</label>
      <input
        type="number"
        value={storageTransfer}
        onChange={handleStorageTransferChange}
        className="input-field"
        min="0"
        step="10" // Change steps if necessary
      />
    </div>
  );
};

export default CloudStorageComponent;