import React, { useState } from 'react';
import {Progress, Input} from 'semantic-ui-react';
import {Container, Wrapper} from './styles';
import {Link} from 'react-router-dom';
import Axios from 'axios';

function Main() {
  const [progress, setProgress] = useState(0);

  function handleUploadFile(e){
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    console.log()
    const configs = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: progressEvent => {
        const total = progressEvent.total;
        const loaded = progressEvent.loaded;
        const percent = (loaded*100) / total;
        setProgress(percent);
      }
    };
    
    Axios.post('http://localhost:3333/upload', formData, configs)
      .then(()=>setProgress(100));
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
        <Link to='/files' className="ui button" style={{marginTop: 20}}>Show files</Link>
      </Wrapper>
    </Container>
  );
}

export default Main;
