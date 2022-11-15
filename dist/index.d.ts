import { FC, MouseEventHandler } from "react";
export interface IPayment {
    tokenId: number;
    buyCount: number;
    config?: {
        logo?: string;
        project?: string;
    };
    close: MouseEventHandler<HTMLButtonElement>;
}
declare const Payments: FC<IPayment>;
export default Payments;
