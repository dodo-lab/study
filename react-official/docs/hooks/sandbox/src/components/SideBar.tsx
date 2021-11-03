import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React, { useLayoutEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { pages } from './../pages/';

type Props = {
  drawerWidth: number;
};

const SideBar: React.FC<Props> = ({ drawerWidth }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const history = useHistory();
  const location = useLocation();

  const handleSelectedIndex = (index: number) => {
    history.push(pages[index].link);
  };

  useLayoutEffect(() => {
    const index = pages.findIndex((page) => page.link === location.pathname);
    if (index !== -1) {
      document.title = pages[index].text + ' | React App';
      setSelectedIndex(index);
    }
  }, [location]);

  return (
    <Drawer anchor="left" open={true} variant="permanent">
      <Box sx={{ width: drawerWidth }}>
        <List>
          {pages.map(({ text }, index) => (
            <ListItemButton
              key={index}
              selected={selectedIndex === index}
              onClick={() => handleSelectedIndex(index)}
            >
              <ListItemText>{text}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
