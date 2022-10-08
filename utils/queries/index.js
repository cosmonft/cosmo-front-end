import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: process.env.LENS_SUBGRAPH,
  cache: new InMemoryCache(),
});

export const makeQuery = async (
    query,
    variables, 
    client
) => {
    const output = variables === undefined 
    ? await client.query({
        query
    })
    : await client.query({
        query,
        variables
    })
    return output;
};

export const makeMutation = async (
    mutation,
    variables,
    client,
) => {
    const output = variables === undefined
    ? await client.mutate({
        mutation
    })
    : await client.mutate({
        mutation,
        variables
    });
    return output;
};
