import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Builder from './Builder';
import OrmList from './Orm';
const Copy = () => {
  return (
    <div>
      <Routes>
        <Route path="/builder" element={<Builder />} />
        <Route path="/orm" element={<OrmList />} />
      </Routes>
    </div>
  );
}
export default Copy;