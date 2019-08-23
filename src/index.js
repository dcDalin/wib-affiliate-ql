import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import config from './config';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const ENV_VAR = config.get(process.env.NODE_ENV);

const PORT = process.env.PORT || ENV_VAR.APP_PORT;

(async () => {
  try {
    const app = express();

    app.disable('x-powered-by');

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => ({ req }),
      introspection: true,
      playground: true,
    });
    server.applyMiddleware({ app });

    // eslint-disable-next-line no-console
    app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
})();
