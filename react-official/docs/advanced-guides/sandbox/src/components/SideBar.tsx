import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { pages } from './../pages/';

type Props = {
  drawerWidth: number;
};

const SideBar: React.FC<Props> = ({ drawerWidth }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const history = useHistory();

  const handleSelectedIndex = (index: number) => {
    history.push(pages[index].link);
    setSelectedIndex(index);
  };

  return (
    <Drawer anchor="left" open={true} variant="permanent">
      <Box sx={{ width: drawerWidth }}>
        <List>
          {pages.map(({ text }, index) => (
            <ListItemButton
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
