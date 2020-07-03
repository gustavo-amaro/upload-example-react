import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Wrapper } from './styles';

function Files() {
  return (
    <Container>
        <Wrapper>
            <Link to='/' className="ui button" style={{marginTop: 20}}>Back</Link>
            <h1>Files:</h1>
        </Wrapper>
    </Container>
  );
}

export default Files;