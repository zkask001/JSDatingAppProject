// file used to initialize components common across all pages of application

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Link from 'next/link';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
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
            {/* Add more links as needed */}
          </ul>
        </nav>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;