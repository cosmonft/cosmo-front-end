import { makeMutation } from ".";

const authMutation = `
    mutation($request: SignedAuthChallenge!) { 
    authenticate(request: $request) {
        accessToken
        refreshToken
        }
    }
`

export const authenticate = (address, signature) => {
    return makeMutation(
        authMutation,
        {
            request: {
                address,
                signature
            }
        }
    );
};
