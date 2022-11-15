declare global {
    interface Window {
        ethereum: any;
    }
}
declare const web3: any;
declare const WALLET_NETWORK: string;
export { web3, WALLET_NETWORK };
