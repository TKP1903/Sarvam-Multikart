import { ApolloServer } from "apollo-server-micro";

const apolloServer = new ApolloServer({
    typeDefs: `
        type Query {
            hello: String
        }
    `,
    resolvers: {
        Query: {
            hello: () => "Hello World"
        }
    }
});


export const config = {
    api: {
        bodyParser: false
    },
};
