export interface Wallet {
    address: string;
    balance: number;
    network: number;
}
export declare const setMetamaskAccount: () => Promise<{
    address: string;
    balance: any;
    network: any;
}>;
export declare const changeNetwork: (chainId: number) => Promise<boolean>;
