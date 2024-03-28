// file used to initialize components common across all pages of application

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Link from 'next/link';
import Auth0Provider from '../auth/Auth0Provider';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    // <Auth0Provider>
      <ApolloProvider client={client}>
        <div>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/liked">
                  <a>Liked Profiles</a>
                </Link>
              </li>
            </ul>
          </nav>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    // </Auth0Provider>
  );
}

export default MyApp;