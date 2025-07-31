
import React from 'react';
import pythonImg from '../../assets/pyhton.jpg';
import javascriptImg from '../../assets/javascript.jpg';

function Tutorials() {
  return (
    <div style={{ padding: '20px'}}>
      <h2>Explore Programming Languages</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <img src={pythonImg} alt="Python" width="800" />
          
        </div>
        <div>
          <img src={javascriptImg} alt="JavaScript" width="800" />
          
        </div>
      </div>
    </div>
  );
}

export default Tutorials;
