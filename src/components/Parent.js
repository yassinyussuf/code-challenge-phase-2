import React from 'react';
import Child from "./Child";


function Parent({props}) {
  return (
    <div className='parents-container'>
        <Child props={props} />
        </div>
  );
}

export default Parent