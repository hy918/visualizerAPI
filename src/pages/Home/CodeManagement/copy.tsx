import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import Builder from './Builder';
import BuilderTab from './BuilderTab';

import OrmList from './Orm';
const Copy = () => {
  return (
    <div className='g-ml-6'>
      <Routes>
        <Route path="/builder" element={<BuilderTab />} />
        <Route path="/orm" element={<OrmList />} />
      </Routes>
    </div>
  );
}
export default Copy;