import { FC, MouseEventHandler } from "react";
interface IProps {
    account: string | null;
    orderName: string;
    price: number;
    isConnecting: boolean;
    connectMetamask: MouseEventHandler<HTMLButtonElement>;
}
declare const Pay: FC<IProps>;
export default Pay;
