import React, { useState } from 'react';
import Headers from './Headers';
import './labelStyle.css';

const CEComponent = ({
  ceNumNodes,
  ceNumClusters,
  ceCrit,
  ceSizeNodes,
  ceBootDiskSize,
  handleCeNumNodesChange,
  handleNumClustersChange,
  handleCritChange,
  handleSizeNodesChange,
  handleBootDiskSizeChange,
}) => {
  return (
    <div className="input-section">
      <Headers level={2} text='CE' className="header-primary"/>
      <label className="label" htmlFor="NumNodes">Number of Nodes:</label>
      <input id="NumNodes"
        type="number"
        value={ceNumNodes}
        onChange={handleCeNumNodesChange}
        className="input-field"
        min="0"
        step="1"
      />
      <label className="label" htmlFor="Crit">Criticality:</label>
      <select id="Crit" value={ceCrit} onChange={handleCritChange} className="input-field">
        <option value="1">No</option>
        <option value="2">Yes</option>
      </select>
      <label className="label" htmlFor="NumClusters">Number of Regional Clusters:</label>
      <input id="NumClusters"
        type="number"
        value={ceNumClusters}
        onChange={handleNumClustersChange}
        className="input-field"
        min="0"
      />
      <label className="label" htmlFor="SizeNodes">Size of Nodes:</label>
      <select id="SizeNodes" value={ceSizeNodes} onChange={handleSizeNodesChange} className="input-field">
        <option value="0">Xsmall (2 vCPU, 8GB RAM)</option>
        <option value="1">Small (4 vCPU, 16GB RAM)</option>
        <option value="2">Medium (8 vCPU, 32GB RAM)</option>
        <option value="3">Large (16 vCPU, 64GB RAM)</option>
        <option value="4">Xlarge (32 vCPU, 128GB RAM)</option>
        <option value="5">XXlarge (64 vCPU, 256GB RAM)</option>
        <option value="6">XXXlarge (128 vCPU, 512GB RAM)</option>
      </select>
      <label className="label" htmlFor="BootDiskSize">Boot Disk Size:</label>
      <input id="BootDiskSize"
        type="number"
        value={ceBootDiskSize}
        onChange={handleBootDiskSizeChange}
        className="input-field"
        min="0"
        step="10"
      />
    </div>
  );
};

export default CEComponent;