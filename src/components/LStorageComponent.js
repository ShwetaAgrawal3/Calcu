import React from 'react';
import Headers from './Headers';
import InfoButton from './InfoButton';

const LStorageComponent = ({
    lStorageSize,
    handleLStorageSizeChange
}) => {
  return (
    <div className="input-section">
        <div className='header-with-info'>
            <Headers level={2} text='Log Storage'/>
            <InfoButton content="<p>Information about Log Storage</p>" />
        </div>
        <label>How much log storage will your workload require?</label>
        <select value={lStorageSize} onChange={handleLStorageSizeChange} className="input-field">
            <option value={0}>None</option>
            <option value={100}>Xsmall</option>
            <option value={500}>Small</option>
            <option value={1000}>Medium</option>
            <option value={2000}>Large</option>
            <option value={5000}>Xlarge</option>
        </select>
    </div>
  );
};

export default LStorageComponent;