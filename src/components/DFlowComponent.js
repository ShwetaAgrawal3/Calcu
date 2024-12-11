import React from 'react';
import Headers from './Headers';
import InfoButton from './InfoButton';

// Needs to split up size of dataflow job into number of compute units & storage amounts (job hours per month?)

const DFlowComponent = ({
    dFlowType,
    dFlowSize,
    handleDFlowTypeChange,
    handleDFlowSizeChange
}) => {
  return (
    <div className="input-section">
        <div className='header-with-info'>
            <Headers level={2} text='Dataflow'/>
            <InfoButton content="<p>Information about Dataflow Product</p>" />
        </div>
        <label>Type of Dataflow Job</label>
        <select value={dFlowType} onChange={handleDFlowTypeChange} className="input-field">
            <option value={0}>None</option>
            <option value={1}>Batch</option>
            <option value={2}>Streaming</option>
        </select>
        <label>Size of Dataflow Job</label>
        <select value={dFlowSize} onChange={handleDFlowSizeChange} className="input-field">
            <option value={0}>None</option>
            <option value={20}>Small</option>
            <option value={200}>Medium</option>
            <option value={2000}>Large</option>
        </select>
    </div>
  );
};

export default DFlowComponent;