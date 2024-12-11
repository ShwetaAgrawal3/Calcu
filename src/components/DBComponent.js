import React from 'react';
import Headers from './Headers';

const DBComponent = ({
  dbType,
  dbSize,
  dbMysqlNetEgress,
  dbMysqlInetEgress,
  dbNosqlReads,
  dbNosqlWrites,
  dbNosqlDocs,
  dbNosqlNetEgress,
  dbNosqlInetEgress,
  dbBDRegionEgress,
  dbBDInetEgress,
  handleDbTypeChange,
  handleDbSizeChange,
  handleDbMysqlNetEgressChange,
  handleDbMysqlInetEgressChange,
  handleDbNosqlReadsChange,
  handleDbNosqlWritesChange,
  handleDbNosqlDocsChange,
  handleDbNosqlNetEgressChange,
  handleDbNosqlInetEgressChange,
  handleDbBDRegionEgressChange,
  handleDbBDInetEgressChange
}) => {
  return (
    <div className="input-section">
      <Headers level={2} text='DB'/>
      <label>Type of DB:</label>
      <select value={dbType} onChange={handleDbTypeChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>MySQL or PostgreSQL</option>
        <option value={2}>NoSQL</option>
        <option value={3}>NoSQL Big Data</option>
        <option value={4}>SQL & NoSQL</option>
      </select>
      <label>Size of DB:</label>
      <select value={dbSize} onChange={handleDbSizeChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
      <label>Network Egress within GCP per month:</label>
      <select value={dbMysqlNetEgress} onChange={handleDbMysqlNetEgressChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
      <label>Internet Egress per month:</label>
      <select value={dbMysqlInetEgress} onChange={handleDbMysqlInetEgressChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
      <label>Document Reads per day:</label>
      <select value={dbNosqlReads} onChange={handleDbNosqlReadsChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
      <label>Document Writes per day:</label>
      <select value={dbNosqlWrites} onChange={handleDbNosqlWritesChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
      <label>Document Deletes per day:</label>
      <select value={dbNosqlDocs} onChange={handleDbNosqlDocsChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
      <label>NoSQL Network Egress within GCP per month:</label>
      <select value={dbNosqlNetEgress} onChange={handleDbNosqlNetEgressChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
      <label>NoSQL Internet Egress per month:</label>
      <select value={dbNosqlInetEgress} onChange={handleDbNosqlInetEgressChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
      <label>Big Data Region Egress per month:</label>
      <select value={dbBDRegionEgress} onChange={handleDbBDRegionEgressChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
      <label>Big Data Internet Egress per month:</label>
      <select value={dbBDInetEgress} onChange={handleDbBDInetEgressChange} className="input-field">
        <option value={0}>None</option>
        <option value={1}>Small</option>
        <option value={2}>Medium</option>
        <option value={3}>Large</option>
      </select>
    </div>
  );
};

export default DBComponent;