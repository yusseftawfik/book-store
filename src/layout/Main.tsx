import { FC, ReactElement } from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import SideBar from './SideBar';

type Props = {
    children: ReactElement;
};

const Main: FC<Props> = ({ children }): ReactElement => {
    //---------------------------------------------------------------------------------------
    return (
        <Box sx={{ display: `flex` }}>
            <CssBaseline />
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, background: `#F1F1F1`, height: `100vh` }}>
                {children}
            </Box>
        </Box>
    );
};

export default Main;
