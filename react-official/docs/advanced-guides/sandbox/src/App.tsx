import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

const drawerWidth = 200;

function App() {
  return (
    <BrowserRouter>
      <Drawer anchor="left" open={true} variant="permanent">
        <Box sx={{ width: drawerWidth }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </Box>
      </Drawer>
      <Box
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Box>
    </BrowserRouter>
  );
}

export default App;
