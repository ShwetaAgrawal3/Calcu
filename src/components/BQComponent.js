import React from 'react';
import Headers from './Headers';

const BQComponent = ({
    bqComputeSize,
    bqActiveStorage,
    bqLongStorage,
    bqActivePhysStorage,
    bqLongPhysStorage,
    bqStreamInserts,
    bqStreamWrites,
    bqStreamReads,
    handleBqComputeSizeChange,
    handleBqActiveStorageChange,
    handleBqLongStorageChange,
    handleBqActivePhysStorageChange,
    handleBqLongPhysStorageChange,
    handleBqStreamInsertsChange,
    handleBqStreamWritesChange,
    handleBqStreamReadsChange,
}) => {
  return (
    <div className="input-section">
      <Headers level={2} text='BQ' className="header-primary"/>
      <label className="label">Amount of data queried (in GB):</label>
      <input id="DataQueried"
        type="number"
        value={bqComputeSize}
        onChange={handleBqComputeSizeChange}
        className="input-field"
        min="1"
        step="10"
      />
      <label className="label">Active logical storage (in GiB):</label>
      <input id="ActiveLogical"
        type="number"
        value={bqActiveStorage}
        onChange={handleBqActiveStorageChange}
        className="input-field"
        min="1"
        step="10"
      />
      <label className="label">Long-term logical storage (in GiB):</label>
      <input id="ActiveLogical"
        type="number"
        value={bqLongStorage}
        onChange={handleBqLongStorageChange}
        className="input-field"
        min="1"
        step="10"
      />
      <label className="label">Active physical storage (in GiB):</label>
      <input id="ActivePhysical"
        type="number"
        value={bqActivePhysStorage}
        onChange={handleBqActivePhysStorageChange}
        className="input-field"
        min="1"
        step="10"
      />
      <label className="label">Long-term physical storage (in GiB):</label>
      <input id="LongPhysical"
        type="number"
        value={bqLongPhysStorage}
        onChange={handleBqLongPhysStorageChange}
        className="input-field"
        min="1"
        step="10"
      />
      <label className="label">Streaming inserts (in GiB):</label>
      <input id="StreamIns"
        type="number"
        value={bqStreamInserts}
        onChange={handleBqStreamInsertsChange}
        className="input-field"
        min="1"
        step="10"
      />
      <label className="label">Streaming reads (in GiB):</label>
      <input id="StreamReads"
        type="number"
        value={bqStreamReads}
        onChange={handleBqStreamReadsChange}
        className="input-field"
        min="1"
        step="10"
      />
      <label className="label">Storage Write API (in GiB):</label>
      <input id="StreamWrites"
        type="number"
        value={bqStreamWrites}
        onChange={handleBqStreamWritesChange}
        className="input-field"
        min="1"
        step="10"
      />
    </div>
  );
};

export default BQComponent;