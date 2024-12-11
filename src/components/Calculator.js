import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Calculator.css';
import Modal from './DetailedCostsModal';
import ProductSelectionModal from './ProductSelectionModal';
import Headers from './Headers';
import CEComponent from './CEComponent';
import CloudStorageComponent from './CloudStorageComponent';
// import DBComponent from './DBComponent';
import BQComponent from './BQComponent';
// import DFlowComponent from './DFlowComponent';
// import GCLBComponent from './GCLBComponent'
// import LStorageComponent from './LStorageComponent';
import StickyButton from './StickyButton';
import ProductCostTable from './ProductCostTable/ProductCostTable';
import ModalView from './ModalV1/ModalView';



// import FilestoreComponent from './FilestoreComponent';

const defaultValues = {
  ceNumNodes: "1",
  ceNumClusters: "1",
  ceCrit: "1",
  ceSizeNodes: "0",
  ceBootDiskSize: "0",
  
  storageAmount: "0",
  storageClassA: "0",
  storageClassB: "0",
  storageTransfer: "0",
  
  bqComputeSize: "0",
  bqActiveStorage: "0",
  bqLongStorage: "0",
  bqActivePhysStorage: "0",
  bqLongPhysStorage: "0",
  bqStreamInserts: "0",
  bqStreamWrites: "0",
  bqStreamReads: "0",
  
};


const Calculator = () => {
  // CE Vars
  const [ceNumNodes, setNumNodes] = useState(() => sessionStorage.getItem('ceNumNodes')) || defaultValues.ceNumNodes;
  const [ceNumClusters, setNumClusters] = useState(() => sessionStorage.getItem('ceNumClusters')) || defaultValues.ceNumClusters;
  const [ceCrit, setCrit] = useState(() => sessionStorage.getItem('ceCrit')) || defaultValues.ceCrit;
  const [ceSizeNodes, setSizeNodes] = useState(() => sessionStorage.getItem('ceSizeNodes')) || defaultValues.ceSizeNodes;
  const [ceBootDiskSize, setBootDiskSize] = useState(() => sessionStorage.getItem('ceBootDiskSize')) || defaultValues.ceBootDiskSize;

  
  const [storageAmount, setStorageAmount] = useState(() => parseFloat(sessionStorage.getItem('storageAmount')) || defaultValues.storageAmount);
  const [storageClassA, setStorageClassA] = useState(() => parseFloat(sessionStorage.getItem('storageClassA')) || defaultValues.storageClassA);
  const [storageClassB, setStorageClassB] = useState(() => parseFloat(sessionStorage.getItem('storageClassB')) || defaultValues.storageClassB);
  const [storageTransfer, setStorageTransfer] = useState(() => parseFloat(sessionStorage.getItem('storageTransfer')) || defaultValues.storageTransfer);

  

  // BQ Vars
  const [bqComputeSize, setBqComputeSize] = useState(() => sessionStorage.getItem('bqComputeSize')) || defaultValues.bqComputeSize;
  const [bqActiveStorage, setBqActiveStorage] = useState(() => sessionStorage.getItem('bqActiveStorage')) || defaultValues.bqActiveStorage;
  const [bqLongStorage, setBqLongStorage] = useState(() => sessionStorage.getItem('bqLongStorage')) || defaultValues.bqLongStorage;
  const [bqActivePhysStorage, setBqActivePhysStorage] = useState(() => sessionStorage.getItem('bqActivePhysStorage')) || defaultValues.bqActivePhysStorage;
  const [bqLongPhysStorage, setBqLongPhysStorage] = useState(() => sessionStorage.getItem('bqLongPhysStorage')) || defaultValues.bqLongPhysStorage;
  const [bqStreamInserts, setBqStreamInserts] = useState(() => sessionStorage.getItem('bqStreamInserts')) || defaultValues.bqStreamInserts;
  const [bqStreamWrites, setBqStreamWrites] = useState(() => sessionStorage.getItem('bqStreamWrites')) || defaultValues.bqStreamWrites;
  const [bqStreamReads, setBqStreamReads] = useState(() => sessionStorage.getItem('bqStreamReads')) || defaultValues.bqStreamReads;

  

  // General Vars
  const [result, setResult] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTileModalOpen, setIsTileModalOpen] = useState(false);
  const [initialResult, setInitialResult] = useState(null);

  const [selectedDropdownValue, setSelectDropdownValue] = useState();

  const [isTileModaleOpend ,setIsTileModalOpend] = useState(true);
  
  const [selectedProducts, setSelectedProducts] = useState(() => {
    const savedProducts = sessionStorage.getItem('selectedProducts');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  console.log({selectedProducts})

  // Helper function to save input in session storage, validate input to 0-9 in string format, and trigger updating of costs
  const handleInputChange = (setter, key) => (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setter(value);
    }
    sessionStorage.setItem(key, value);
    fetchUpdatedCosts();
  };

  // Change handler
  const handleCeNumNodesChange = handleInputChange(setNumNodes, 'ceNumNodes');
  const handleNumClustersChange = handleInputChange(setNumClusters, 'ceNumClusters');
  const handleCritChange = handleInputChange(setCrit, 'ceCrit');
  const handleSizeNodesChange = handleInputChange(setSizeNodes, 'ceSizeNodes');
  const handleBootDiskSizeChange = handleInputChange(setBootDiskSize, 'ceBootDiskSize');

  

  const handleStorageAmountChange = handleInputChange(setStorageAmount, 'storageAmount');
  const handleStorageClassAChange = handleInputChange(setStorageClassA, 'storageClassA');
  const handleStorageClassBChange = handleInputChange(setStorageClassB, 'storageClassB');
  const handleStorageTransferChange = handleInputChange(setStorageTransfer, 'storageTransfer');

  

  const handleBqComputeSizeChange = handleInputChange(setBqComputeSize, 'bqComputeSize');
  const handleBqActiveStorageChange = handleInputChange(setBqActiveStorage, 'bqActiveStorage');
  const handleBqLongStorageChange = handleInputChange(setBqLongStorage, 'bqLongStorage');
  const handleBqActivePhysStorageChange = handleInputChange(setBqActivePhysStorage, 'bqActivePhysStorage');
  const handleBqLongPhysStorageChange = handleInputChange(setBqLongPhysStorage, 'bqLongPhysStorage');
  const handleBqStreamInsertsChange = handleInputChange(setBqStreamInserts, 'bqStreamInserts');
  const handleBqStreamWritesChange = handleInputChange(setBqStreamWrites, 'bqStreamWrites');
  const handleBqStreamReadsChange = handleInputChange(setBqStreamReads, 'bqStreamReads');

  

  const saveConfiguration = () => {
    sessionStorage.setItem('savedConfiguration', JSON.stringify(result));
    setInitialResult(result); // Reset the comparison in the UI
  };

  const handleDetailsClick = () => {
    setIsModalOpen(true);
    setIsTileModalOpen(false); // Close the tile modal if it's open
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log('closed')
  }

  const handleTileModalOpen = () => {
    setIsTileModalOpen(true);
    setIsModalOpen(false); // Close the details modal if it's open
  };

  const handleTileModalClose = () => {
    setIsTileModalOpen((pre)=>!pre)
  }
  const handleTileModalClosed = () => {
    setIsTileModalOpend((pre)=>!pre)
  }


  const handleProductToggle = (product) => {
    setSelectedProducts((prevSelectedProducts) => {
      const updatedProducts = prevSelectedProducts.includes(product)
        ? prevSelectedProducts.filter((p) => p !== product)
        : [...prevSelectedProducts, product];
      sessionStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

const fetchUpdatedCosts = () => {
    // Initialize payload with zeros
    const payload = {
      ce: {
        ceNumNodes: parseFloat(defaultValues.ceNumNodes),
        ceNumClusters: parseFloat(defaultValues.ceNumClusters),
        ceCrit: parseFloat(defaultValues.ceCrit),
        ceSizeNodes: parseFloat(defaultValues.ceSizeNodes),
        ceBootDiskSize: parseFloat(defaultValues.ceBootDiskSize),
      },
      
      // },
      cloudStorage: {
        storageAmount: parseFloat(defaultValues.storageAmount),
        storageClassA: parseFloat(defaultValues.storageClassA),
        storageClassB: parseFloat(defaultValues.storageClassB),
        storageTransfer: parseFloat(defaultValues.storageTransfer),
      },
      
      bq: {
        bqComputeSize: parseFloat(defaultValues.bqComputeSize),
        bqActiveStorage: parseFloat(defaultValues.bqActiveStorage),
        bqLongStorage: parseFloat(defaultValues.bqLongStorage),
        bqActivePhysStorage: parseFloat(defaultValues.bqActivePhysStorage),
        bqLongPhysStorage: parseFloat(defaultValues.bqLongPhysStorage),
        bqStreamInserts: parseFloat(defaultValues.bqStreamInserts),
        bqStreamWrites: parseFloat(defaultValues.bqStreamWrites),
        bqStreamReads: parseFloat(defaultValues.bqStreamReads)
      },
      
    };

    // Update payload with actual values for selected products
    if (selectedProducts.includes('CEComponent')) {
      payload.ce.ceNumNodes = parseFloat(ceNumNodes) || parseFloat(defaultValues.ceNumNodes);
      payload.ce.ceNumClusters = parseFloat(ceNumClusters) || parseFloat(defaultValues.ceNumClusters);
      payload.ce.ceCrit = parseFloat(ceCrit) || parseFloat(defaultValues.ceCrit);
      payload.ce.ceSizeNodes = parseFloat(ceSizeNodes) || parseFloat(defaultValues.ceSizeNodes);
      payload.ce.ceBootDiskSize = parseFloat(ceBootDiskSize) || parseFloat(defaultValues.ceBootDiskSize);
    }

    

    if (selectedProducts.includes('CloudStorageComponent')) {
      payload.cloudStorage.storageAmount = parseFloat(storageAmount) || parseFloat(defaultValues.storageAmount);
      payload.cloudStorage.storageClassA = parseFloat(storageClassA) || parseFloat(defaultValues.storageClassA);
      payload.cloudStorage.storageClassB = parseFloat(storageClassB) || parseFloat(defaultValues.storageClassB);
      payload.cloudStorage.storageTransfer = parseFloat(storageTransfer) || parseFloat(defaultValues.storageTransfer);
    }

    

    if (selectedProducts.includes('BQComponent')) {
      payload.bq.bqComputeSize = parseFloat(bqComputeSize) || parseFloat(defaultValues.bqComputeSize);
      payload.bq.bqActiveStorage = parseFloat(bqActiveStorage) || parseFloat(defaultValues.bqActiveStorage);
      payload.bq.bqLongStorage = parseFloat(bqLongStorage) || parseFloat(defaultValues.bqLongStorage);
      payload.bq.bqActivePhysStorage = parseFloat(bqActivePhysStorage) || parseFloat(defaultValues.bqActivePhysStorage);
      payload.bq.bqLongPhysStorage = parseFloat(bqLongPhysStorage) || parseFloat(defaultValues.bqLongPhysStorage);
      payload.bq.bqStreamInserts = parseFloat(bqStreamInserts) || parseFloat(defaultValues.bqStreamInserts);
      payload.bq.bqStreamWrites = parseFloat(bqStreamWrites) || parseFloat(defaultValues.bqStreamWrites);
      payload.bq.bqStreamReads = parseFloat(bqStreamReads) || parseFloat(defaultValues.bqStreamReads);
    }

    

    axios.post('http://localhost:8080/gcp-calc', payload)
    .then(response => {
      setResult(response.data);
      if (!initialResult) {
        setInitialResult(response.data);
      }
    })
    .catch(error => console.error('Error:', error));
  };

useEffect(() => {
  fetchUpdatedCosts();
  }, [ceNumNodes, ceNumClusters, ceCrit, ceSizeNodes, ceBootDiskSize, 
      // storageType, storageVolume, storageClassA, storageClassB, storageRegionEgress, storageInetEgress, storageFileBackup, storageBlockSnapshot,
      storageAmount, storageClassA, storageClassB, storageTransfer,
      // basicStorage, premiumStorage, highCapStorage, lowCapStorage, enterpriseStorage, backupStorage,
      // dbType, dbSize, dbMysqlNetEgress, dbMysqlInetEgress, dbNosqlReads, dbNosqlWrites, dbNosqlDocs, dbNosqlNetEgress, dbNosqlInetEgress, dbBDRegionEgress, dbBDInetEgress,
      bqComputeSize, bqActiveStorage, bqLongStorage, bqActivePhysStorage, bqLongPhysStorage, bqStreamInserts, bqStreamReads, bqStreamWrites,
      // dFlowType, dFlowSize,
      // gclbSize,
      // lStorageSize,
      selectedProducts]);

  const buttons = [
    { text: 'Open Product Selection', onClick: handleTileModalOpen },
    { text: 'Details', onClick: handleDetailsClick },
    { text: 'Save Configuration', onClick: saveConfiguration }
  ];

  return (
    <div className="calculator-container">
      <StickyButton buttons={buttons} />
      <div className="headers-input-container">
        <Headers level={1} text='GCP Calculator' className='header-primary'/>
        {selectedProducts.includes('CEComponent') && (
          <CEComponent
            ceNumNodes={ceNumNodes}
            ceNumClusters={ceNumClusters}
            ceCrit={ceCrit}
            ceSizeNodes={ceSizeNodes}
            ceBootDiskSize={ceBootDiskSize}
            handleCeNumNodesChange={handleCeNumNodesChange}
            handleNumClustersChange={handleNumClustersChange}
            handleCritChange={handleCritChange}
            handleSizeNodesChange={handleSizeNodesChange}
            handleBootDiskSizeChange={handleBootDiskSizeChange}
          />
        )}
        {/* {selectedProducts.includes('StorageComponent') && (
          <StorageComponent
            storageType={storageType}
           
            handleStorageBlockSnapshot={handleStorageBlockSnapshot}
          />
        )} */}
        {selectedProducts.includes('CloudStorageComponent') && (
          <CloudStorageComponent
            storageAmount={storageAmount}
            storageClassA={storageClassA}
            storageClassB={storageClassB}
            storageTransfer={storageTransfer}
            handleStorageAmountChange={handleStorageAmountChange}
            handleStorageClassAChange={handleStorageClassAChange}
            handleStorageClassBChange={handleStorageClassBChange}
            handleStorageTransferChange={handleStorageTransferChange}
          />
        )}
        {/* {selectedProducts.includes('FilestoreComponent') && (
          <FilestoreComponent
            basicStorage={basicStorage}
           
            handleBackupStorageChange={handleBackupStorageChange}
          />
        )} */}
        {/* {selectedProducts.includes('DBComponent') && (
          <DBComponent
            dbType={dbType}
            
            handleDbBDInetEgressChange={handleDbBDInetEgressChange}
          />
        )} */}
        {selectedProducts.includes('BQComponent') && (
          <BQComponent
            bqComputeSize={bqComputeSize}
            bqActiveStorage={bqActiveStorage}
            bqLongStorage={bqLongStorage}
            bqActivePhysStorage={bqActivePhysStorage}
            bqLongPhysStorage={bqLongPhysStorage}
            bqStreamInserts={bqStreamInserts}
            bqStreamWrites={bqStreamWrites}
            bqStreamReads={bqStreamReads}
            handleBqComputeSizeChange={handleBqComputeSizeChange}
            handleBqActiveStorageChange={handleBqActiveStorageChange}
            handleBqLongStorageChange={handleBqLongStorageChange}
            handleBqActivePhysStorageChange={handleBqActivePhysStorageChange}
            handleBqLongPhysStorageChange={handleBqLongPhysStorageChange}
            handleBqStreamInsertsChange={handleBqStreamInsertsChange}
            handleBqStreamWritesChange={handleBqStreamWritesChange}
            handleBqStreamReadsChange={handleBqStreamReadsChange}
          />
        )}
        {
          
        }

        
      </div>
      <div className="total-section">
        <h3 className="grand-total">
          Grand Total (Monthly): {(result.grand_total || 0).toFixed(2)}
          {initialResult && result.grand_total !== initialResult.grand_total && (
            <span className={`change-value ${result.grand_total > initialResult.grand_total ? 'positive' : 'negative'}`}>
              {result.grand_total > initialResult.grand_total ? '+' : ''}{(result.grand_total - initialResult.grand_total).toFixed(2)}
            </span>
          )}
        </h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Monthly Cost</th>
            </tr>
          </thead>
          <tbody>
            {result.Product && result.Product.ce_products && Object.entries(result.Product.ce_products)
              .filter(([key, val]) => key.startsWith('Total') && (val.cost_incl_vat || 0) > 0)
              .map(([key, val]) => {
                const initialVal = initialResult?.Product?.ce_products?.[key]?.cost_incl_vat || 0;
                const change = (val.cost_incl_vat || 0) - initialVal;
                return (
                  <tr key={key}>
                    <td>Total CE</td>
                    <td>
                      {(val.cost_incl_vat || 0).toFixed(2)}
                      {change !== 0 && (
                        <span className={`change-value ${change > 0 ? 'positive' : 'negative'}`}>
                          {change > 0 ? '+' : ''}{change.toFixed(2)}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            {result.Product && result.Product.cloud_storage_products && Object.entries(result.Product.cloud_storage_products)
              .filter(([key, val]) => key.startsWith('Total') && (val.cost_incl_vat || 0) > 0)
              .map(([key, val]) => {
                const initialVal = initialResult?.Product?.cloud_storage_products?.[key]?.cost_incl_vat || 0;
                const change = (val.cost_incl_vat || 0) - initialVal;
                return (
                  <tr key={key}>
                    <td>Total Cloud Storage</td>
                    <td>
                      {(val.cost_incl_vat || 0).toFixed(2)}
                      {change !== 0 && (
                        <span className={`change-value ${change > 0 ? 'positive' : 'negative'}`}>
                          {change > 0 ? '+' : ''}{change.toFixed(2)}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
              {result.Product && result.Product.filestore_products && Object.entries(result.Product.filestore_products)
              .filter(([key, val]) => key.startsWith('Total') && (val.cost_incl_vat || 0) > 0)
              .map(([key, val]) => {
                const initialVal = initialResult?.Product?.filestore_products?.[key]?.cost_incl_vat || 0;
                const change = (val.cost_incl_vat || 0) - initialVal;
                return (
                  <tr key={key}>
                    <td>Total Filestore</td>
                    <td>
                      {(val.cost_incl_vat || 0).toFixed(2)}
                      {change !== 0 && (
                        <span className={`change-value ${change > 0 ? 'positive' : 'negative'}`}>
                          {change > 0 ? '+' : ''}{change.toFixed(2)}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            {result.Product && result.Product.db_products && Object.entries(result.Product.db_products)
            .filter(([key, val]) => key.startsWith('Total') && (val.cost_incl_vat || 0) > 0)
            .map(([key, val]) => {
              const initialVal = initialResult?.Product?.db_products?.[key]?.cost_incl_vat || 0;
              const change = (val.cost_incl_vat || 0) - initialVal;
              return (
                <tr key={key}>
                  <td>Total DB</td>
                  <td>
                    {(val.cost_incl_vat || 0).toFixed(2)}
                    {change !== 0 && (
                      <span className={`change-value ${change > 0 ? 'positive' : 'negative'}`}>
                        {change > 0 ? '+' : ''}{change.toFixed(2)}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
            {result.Product && result.Product.bq_products && Object.entries(result.Product.bq_products)
            .filter(([key, val]) => key.startsWith('Total') && (val.cost_incl_vat || 0) > 0)
            .map(([key, val]) => {
              const initialVal = initialResult?.Product?.bq_products?.[key]?.cost_incl_vat || 0;
              const change = (val.cost_incl_vat || 0) - initialVal;
              return (
                <tr key={key}>
                  <td>Total BQ</td>
                  <td>
                    {val.cost_incl_vat.toFixed(2)}
                    {change !== 0 && (
                      <span className={`change-value ${change > 0 ? 'positive' : 'negative'}`}>
                        {change > 0 ? '+' : ''}{change.toFixed(2)}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
            {result.Product && result.Product.dFlow_products && Object.entries(result.Product.dFlow_products)
            .filter(([key, val]) => key.startsWith('Total') && (val.cost_incl_vat || 0) > 0)
            .map(([key, val]) => {
              const initialVal = initialResult?.Product?.dFlow_products?.[key]?.cost_incl_vat || 0;
              const change = (val.cost_incl_vat || 0) - initialVal;
              return (
                <tr key={key}>
                  <td>Total Dataflow</td>
                  <td>
                    {(val.cost_incl_vat || 0).toFixed(2)}
                    {change !== 0 && (
                      <span className={`change-value ${change > 0 ? 'positive' : 'negative'}`}>
                        {change > 0 ? '+' : ''}{change.toFixed(2)}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
            {result.Product && result.Product.gclb_products && Object.entries(result.Product.gclb_products)
            .filter(([key, val]) => key.startsWith('Total') && (val.cost_incl_vat || 0) > 0)
            .map(([key, val]) => {
              const initialVal = initialResult?.Product?.gclb_products?.[key]?.cost_incl_vat || 0;
              const change = (val.cost_incl_vat || 0) - initialVal;
              return (
                <tr key={key}>
                  <td>Total Google Cloud Load Balancer</td>
                  <td>
                    {(val.cost_incl_vat || 0).toFixed(2)}
                    {change !== 0 && (
                      <span className={`change-value ${change > 0 ? 'positive' : 'negative'}`}>
                        {change > 0 ? '+' : ''}{change.toFixed(2)}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
            {result.Product && result.Product.lStorage_products && Object.entries(result.Product.lStorage_products)
            .filter(([key, val]) => key.startsWith('Total') && (val.cost_incl_vat || 0) > 0)
            .map(([key, val]) => {
              const initialVal = initialResult?.Product?.lStorage_products?.[key]?.cost_incl_vat || 0;
              const change = (val.cost_incl_vat || 0) - initialVal;
              return (
                <tr key={key}>
                  <td>Total Log Storage</td>
                  <td>
                    {(val.cost_incl_vat || 0).toFixed(2)}
                    {change !== 0 && (
                      <span className={`change-value ${change > 0 ? 'positive' : 'negative'}`}>
                        {change > 0 ? '+' : ''}{change.toFixed(2)}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isModalOpen && <Modal data={result} onClose={handleCloseModal} />}
      {isTileModalOpen && <ProductSelectionModal onClose={handleTileModalClose} onProductToggle={handleProductToggle} selectedProducts={selectedProducts}setIsTileModalOpend ={setIsTileModalOpend} handleClose={isTileModalOpen&&handleCloseModal} />}
    </div>
  );
};

export default Calculator;