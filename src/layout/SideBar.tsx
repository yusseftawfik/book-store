import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';

import sidebarItems from '../core/data/SidebarItems';

const SideBar: FC = (): ReactElement => (
    <Drawer
        sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: `border-box`,
            },
        }}
        variant="permanent"
        anchor="left"
    >
        <div className="h-full p-5">
            <img src="/logo.svg" alt="logo" width={180} height={45} />
            <List className="!mt-5">
                {sidebarItems.map((item) => (
                    <Link to={item.path} data-key="t-analytics">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SvgIcon component={item?.icon} className="hover:!text-[#BF5523]" />
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    </Drawer>
);

export default SideBar;
