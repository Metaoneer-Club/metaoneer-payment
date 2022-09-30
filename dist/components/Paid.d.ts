import { FC, MouseEventHandler } from "react";
interface IProps {
    network: string;
    isPaid: boolean;
    txHash: string;
    price: number;
    close: MouseEventHandler<HTMLButtonElement>;
    closeHandler: MouseEventHandler<HTMLButtonElement>;
}
declare const Paid: FC<IProps>;
export default Paid;
