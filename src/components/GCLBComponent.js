import React from 'react';
import Headers from './Headers';
import InfoButton from './InfoButton';

// Might want to split up the gclbSize into inbound and outbound

const GCLBComponent = ({
    gclbSize,
    handleGCLBSizeChange
}) => {
  return (
    <div className="input-section">
        <div className='header-with-info'>
            <Headers level={2} text='Dataflow'/>
            <InfoButton content="<p>Information about Dataflow Product</p>" />
        </div>
        <label>What size of data must the load balancer manage?</label>
        <select value={gclbSize} onChange={handleGCLBSizeChange} className="input-field">
            <option value={0}>None</option>
            <option value={1024}>Small</option>
            <option value={10240}>Medium</option>
            <option value={102400}>Large</option>
        </select>
    </div>
  );
};

export default GCLBComponent;