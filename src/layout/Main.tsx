import { FC, ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './Header';
import SideBar from './SideBar';

type Props = {
    children: ReactElement;
};

const Main: FC<Props> = ({ children }): ReactElement => {
    //---------------------------------------------------------------------------------------
    return (
        <Box sx={{ display: `flex` }}>
            <ToastContainer closeButton />
            <CssBaseline />
            <SideBar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    background: `#F1F1F1`,
                    minHeight: `100vh`,
                    overflow: `hidden`,
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `35px`,
                }}
            >
                <Header />
                {children}
            </Box>
        </Box>
    );
};

export default Main;
