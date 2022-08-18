import React from 'react';
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import SideMenu from 'components/SideMenu';
import { ThemeProvider } from 'styled-components';
import { ScreenClassProvider } from 'react-grid-system';
// theme
import {GlobalStyle} from 'theme/globalStyle';
// style
import {StyledMainApp} from './style';
import './App.css';

function App() {

    return (
        <StyledMainApp className="App">
            <ScreenClassProvider>
                <ThemeProvider theme={{}}>
                    {/* SideBar */}
                    <SideMenu />
                    <GlobalStyle />
                </ThemeProvider>
            </ScreenClassProvider>
        </StyledMainApp>
    );
}

export default App;
