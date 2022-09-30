import { FC, MouseEventHandler } from "react";
declare global {
    interface Window {
        ethereum: any;
        klaytn: any;
    }
}
export interface IPayment {
    apiKey: string;
    config?: {
        logo?: string;
        project?: string;
    };
    close: MouseEventHandler<HTMLButtonElement>;
}
declare const Payments: FC<IPayment>;
export default Payments;
