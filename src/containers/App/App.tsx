import React from 'react';

import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import Button from 'components/UI/Button';
import TextInput from 'components/UI/TextInput';

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
                  client: new S3Client({region: 'us-east-1', credentials: {accessKeyId: 'AKIAYI6VQGA4IPVJH5P6', secretAccessKey: '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'}}),
                  params,
                  leavePartsOnError: false,
              });

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
    <div className="App">
      <input type='file' onChange={handleUploadFile}/>
        {/*<TextIput type='text' onChange={() => console.log('prueba 11111')} name='pruebainput' />
        <Button name='enviar' type='submit' onClick={() => { console.log('prueba')}} label='prueba' />*/}
    </div>
  );
}

export default App;
