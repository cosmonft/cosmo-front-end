import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-mumbai.lens.dev/",
  cache: new InMemoryCache(),
});

export const makeQuery = async (
    inputQuery,
    queryVars, 
    client
) => {
    const output = queryVars === undefined 
    ? await client.query({
        query: gql(inputQuery)
    })
    : await client.query({
        query: gql(inputQuery),
        variables: queryVars
    })
    return output;
};

export const makeMutation = async (
    inputMutation,
    mutationVars,
    client,
) => {
    const output = mutationVars === undefined
    ? await client.mutate({
            mutation: gql(inputMutation)
    })
    : await client.mutate({
        mutation: gql(inputMutation),
        variables: mutationVars
    });
    return output;
};
