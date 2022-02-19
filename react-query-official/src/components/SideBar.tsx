import {Box, Drawer, List, ListItemButton, ListItemText} from '@mui/material';
import {useRouter} from 'next/router';
import React from 'react';

const drawerWidth = 140;

type Props = {
  links: string[];
};

const SideBar: React.FC<Props> = ({links}) => {
  const router = useRouter();

  return (
    <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
      <Drawer variant="permanent" anchor="left" open={true}>
        <List sx={{width: drawerWidth}}>
          {links.map(link => (
            <ListItemButton
              selected={router.pathname === `/${link}`}
              key={link}
              onClick={() => router.push(`/${link}`)}>
              <ListItemText primary={link.toUpperCase()} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
