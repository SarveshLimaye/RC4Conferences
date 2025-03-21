import '/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import SSRProvider from 'react-bootstrap/SSRProvider';
import {SessionProvider} from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { Toaster } from 'react-hot-toast';
function MyApp({ Component, pageProps: {session, ...pageProps}}) {
  return (
    <SSRProvider>
      <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Layout menu={pageProps}>
          <Toaster 
           position="top-right"
           reverseOrder={false}
          />
          <Component {...pageProps} />
        </Layout>
        </SessionProvider>
      </ApolloProvider>
    </SSRProvider>
  );
}

export default MyApp;
