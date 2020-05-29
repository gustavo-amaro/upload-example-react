import React, { useState } from 'react';
import {Progress, Input} from 'semantic-ui-react';
import {Container, Wrapper} from './styles';
import Axios from 'axios';

function App() {
  const [progress, setProgress] = useState(0);
  function handleUploadFile(e){
    setProgress(progress+1);
  }
  return (
    <Container>
      <Wrapper>
        <h1>Select file to upload:</h1>
        <label htmlFor="file-upload" className="ui button">Upload file</label>
        <Input type="file" id="file-upload" style={{display: 'none' }} onChange={handleUploadFile}/>
        <Progress percent={progress} style={{display: progress!==0?'block':'none', width: '100%', marginTop: 30}} indicating>
          {progress===100?'Upload Complete!':'uploading...'}
        </Progress>
      </Wrapper>
    </Container>
  );
}

export default App;
