import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const walletConnect = new WalletConnectConnector({
        rpcUrl: "https://polygon-mumbai.gateway.pokt.network/v1/lb/e0d9012c09bc00927b53c83d",
        bridge: "https://bridge.walletconnect.org",
        qrcode: true 
    });
