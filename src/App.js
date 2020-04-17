import React, { Fragment, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%,  #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica sans serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3 rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor:pointer;
    background-size: 400px;
  }

`;

function App() {

  //Quote state
  const [quote, getQuote] = useState({});


  const requestApi =  async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quote = await api.json()
    getQuote(quote[0]);
  }

  //Load a quote
  useEffect( () => {
    requestApi()
  }, [])
  return (
    <Fragment>
      <Container>
        <Quote 
          quote = {quote}
        />
        <Button
          onClick={requestApi}
        >
          Get Quote
        </Button>
      </Container>
    </Fragment>
  );
}

export default App;
