import React from 'react'
import styled from 'styled-components'
import HeaderProfile from './components/HeaderProfile'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 60px auto;
`

function App() {
  return (
    <Container>
      <HeaderProfile />
      <Gallery />
      <Footer />
    </Container>
  );
}

export default App;
 