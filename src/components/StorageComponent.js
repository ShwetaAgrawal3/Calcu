import React from 'react';
import Headers from './Headers';

const StorageComponent = ({
  storageType,
  storageVolume,
  storageClassA,
  storageClassB,
  storageRegionEgress,
  storageInetEgress,
  storageFileBackup,
  storageBlockSnapshot,
  handleStorageTypeChange,
  handleStorageVolumeChange,
  handleStorageClassAChange,
  handleStorageClassBChange,
  handleStorageRegionEgressChange,
  handleStorageInetEgressChange,
  handleStorageFileBackupChange,
  handleStorageBlockSnapshot
}) => {
  return (
    <div className="input-section">
      <Headers level={2} text='Storage'/>
      <label>Storage Type:</label>
      <select value={storageType} onChange={handleStorageTypeChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Object</option>
        <option value={2}>Block</option>
        <option value={3}>File</option>
      </select>
      <label>Storage Volume:</label>
      <select value={storageVolume} onChange={handleStorageVolumeChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Xsmall</option>
        <option value={2}>Small</option>
        <option value={3}>Medium</option>
        <option value={4}>Large</option>
        <option value={5}>Xlarge</option>
        <option value={6}>XXlarge</option>
        <option value={7}>XXXlarge</option>
        <option value={8}>4Xlarge</option>
      </select>
      <label>Storage Class A:</label>
      <select value={storageClassA} onChange={handleStorageClassAChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Xsmall</option>
        <option value={2}>Small</option>
        <option value={3}>Medium</option>
        <option value={4}>Large</option>
        <option value={5}>Xlarge</option>
      </select>
      <label>Storage Class B:</label>
      <select value={storageClassB} onChange={handleStorageClassBChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Xsmall</option>
        <option value={2}>Small</option>
        <option value={3}>Medium</option>
        <option value={4}>Large</option>
        <option value={5}>Xlarge</option>
      </select>
      <label>Storage Region Egress:</label>
      <select value={storageRegionEgress} onChange={handleStorageRegionEgressChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
      <label>Storage Internet Egress:</label>
      <select value={storageInetEgress} onChange={handleStorageInetEgressChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
      <label>Storage File Backup:</label>
      <select value={storageFileBackup} onChange={handleStorageFileBackupChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
        <option value={4}>Xlarge</option>
        <option value={5}>XXlarge</option>
        <option value={6}>XXXlarge</option>
        <option value={7}>4Xlarge</option>
      </select>
      <label>Storage Block Snapshot:</label>
      <select value={storageBlockSnapshot} onChange={handleStorageBlockSnapshot} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
        <option value={4}>Xlarge</option>
        <option value={5}>XXlarge</option>
        <option value={6}>XXXlarge</option>
        <option value={7}>4Xlarge</option>
      </select>
    </div>
  );
};

export default StorageComponent;