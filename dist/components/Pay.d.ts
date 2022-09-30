import { FC, MouseEventHandler } from "react";
interface IProps {
    currentWallet: string | null;
    mAccount: string | null;
    kAccount: string | null;
    orderName: string;
    orderDescription: string;
    price: number;
    connectMetamask: MouseEventHandler<HTMLButtonElement>;
    connectKaikas: MouseEventHandler<HTMLButtonElement>;
}
declare const Pay: FC<IProps>;
export default Pay;
