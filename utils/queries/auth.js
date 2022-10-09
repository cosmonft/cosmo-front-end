import { makeMutation, 
    makeQuery } from ".";

const requestChallenge = `
    query ($request: ChallengeRequest!) {
        challenge(request: $request) {
            text
        }
    }
`

const authMutation = `
    mutation($request: SignedAuthChallenge!) { 
    authenticate(request: $request) {
        accessToken
        refreshToken
        }
    }
`

const generateChallenge = async (userAdrs) => {
    const result = await makeQuery(
        requestChallenge,
        {
            userAdrs
        }
    )
    return result.data.challenge;
}

const verifyChallenge = async (userAdrs, signedTx) => {
    const result = await makeMutation(
        authMutation,
        {
            userAdrs,
            signedTx
        }
    )
    return result.data.authenticate;
}
 
export const authenticate = async (signer) => {
    const challengeResponse = await generateChallenge(signer.address);
    const signature = await signer.signMessage(challengeResponse.text);
    const authResult = await verifyChallenge(signer.address, signature);
    console.log(`Login result: ${authenticatedResult}`);
    return authResult;
};
