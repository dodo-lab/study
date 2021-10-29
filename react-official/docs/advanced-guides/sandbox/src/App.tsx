import { Box } from '@mui/system';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import { pages } from './pages';
import ContextPage from './pages/context/ContextPage';

const drawerWidth = 200;

function App() {
  return (
    <BrowserRouter>
      <SideBar drawerWidth={drawerWidth} />
      <Box
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        {pages.map(({ link, component }, index) => (
          <Route key={index} exact path={link} component={component} />
        ))}
        <Route exact path="/" component={ContextPage} />
      </Box>
    </BrowserRouter>
  );
}

export default App;
