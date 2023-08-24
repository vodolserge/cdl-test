import React from 'react';

const ProgressBar = ({ current, total }) => (
    <div className="progress-bar">
        <div className="progress" style={{ width: `${(current / total) * 100}%` }} />
        <div className="progress-text">
            {current}/{total}
        </div>
    </div>
);

export default ProgressBar;
