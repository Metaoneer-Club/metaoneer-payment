declare global {
    interface Window {
        ethereum: any;
    }
}
declare let web3: any, WALLET_NETWORK: string;
export { web3, WALLET_NETWORK };
