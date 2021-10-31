import React from 'react';
import PortalComponent from './parts/PortalComponent';
import { Box } from '@mui/material';

const PortalPage: React.FC = () => {
  return (
    <>
      <Box sx={{ width: 800, height: 100, backgroundColor: 'skyblue' }}>
        <p>この領域は{'<div id="root">'}配下でレンダーされている</p>
      </Box>
      <PortalComponent>
        <Box sx={{ width: 800, height: 200, backgroundColor: 'lightgreen' }}>
          <div style={{ marginLeft: 200 }}>
            <p>この領域は{'<div id="root-portal">'}配下でレンダーされている</p>
            <p>↑ marginLeft指定あり(200px)</p>
            <p>↓ marginLeft指定なしで、[A-Z]を表示</p>
          </div>
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        </Box>
      </PortalComponent>
    </>
  );
};

export default PortalPage;
