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

  const handleUploadFile = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
          const params = {
              Bucket: 'bucket-evangelism-rdr-mobile',
              Key: event.target.files[0].name || '',
              Body: event.target.files[0] || '',
          }
          try {
              const parallelUploads3 = new Upload({
                  client: new S3Client({region: 'us-east-1', credentials: {accessKeyId: 'AKIAYI6VQGA4BASGLTW4', secretAccessKey: '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'}}),
                  params,
                  leavePartsOnError: false,
              });
                console.log('pasa');
              parallelUploads3.on("httpUploadProgress", (progress) => {
                  console.log(progress);
              });

              parallelUploads3.done();
          } catch (e) {
              console.log(e);
          }
      }
  }, []);

  return (
    <StyledMainApp className="App">
        <ScreenClassProvider>
            <ThemeProvider theme={{}}>
                {/* Input file */}
                {/*<input type='file' onChange={handleUploadFile} />*/}
                {/* SideBar */}
                <SideMenu />
                <GlobalStyle />
            </ThemeProvider>
        </ScreenClassProvider>
    </StyledMainApp>
  );
}

export default App;
