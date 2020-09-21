import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-family: 'Roboto',sans-serif;
        box-sizing:border-box;
        
    }
    body{
      background: #F6F7FB;
    }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Container>
  );
};

export default Layout;
