import React, { useState } from 'react'
import Headers from './Headers';
import CustomInput from './CustomInput';

const FilestoreComponent = ({
    basicStorage,
    premiumStorage,
    highCapStorage,
    lowCapStorage,
    enterpriseStorage,
    backupStorage,
    handleBasicStorageChange,
    handlePremiumStorageChange,
    handleHighCapStorageChange,
    handleLowCapStorageChange,
    handleEnterpriseStorageChange,
    handleBackupStorageChange,
  }) => {
    return (
      <div className="input-section">
        <Headers level={2} text='Filestore'/>
        <label>Basic HDD (Standard) storage (in GiB):</label>
        <CustomInput
            value={basicStorage}
            onChange={handleBasicStorageChange}
            className="input-field"
            minValue={0}
            maxValue={2867200}
            blockedMin={0}
            blockedMax={1024}
            step={10}
        />
        <label>Basic SSD (Premium) storage (in GiB):</label>
        <CustomInput
            value={premiumStorage}
            onChange={handlePremiumStorageChange}
            className="input-field"
            minValue={0}
            maxValue={2867200}
            blockedMin={0}
            blockedMax={2560}
            step={10}
        />
        <label>Zonal (higher capacity band) storage (in GiB):</label>
        <CustomInput
            value={highCapStorage}
            onChange={handleHighCapStorageChange}
            className="input-field"
            minValue={0}
            maxValue={2867200}
            blockedMin={0}
            blockedMax={10240}
            step={10}
        />
        <label>Zonal (lower capacity band) storage (in GiB):</label>
        <CustomInput
            value={lowCapStorage}
            onChange={handleLowCapStorageChange}
            className="input-field"
            minValue={0}
            maxValue={2867200}
            blockedMin={0}
            blockedMax={1024}
            step={10}
        />
        <label>Enterprise storage (in GiB):</label>
        <CustomInput
            value={enterpriseStorage}
            onChange={handleEnterpriseStorageChange}
            className="input-field"
            minValue={0}
            maxValue={2867200}
            blockedMin={0}
            blockedMax={1024}
            step={10}
        />
        <label>Backup storage (in GiB):</label>
        <input
            type="number"
            value={backupStorage}
            onChange={handleBackupStorageChange}
            className="input-field"
            min="0"
            step={10}
        />
      </div>
    );
  };

export default FilestoreComponent;