import {ReactNode} from "react";

export interface IPosts {
    id: number;
    userId: number;
    title: String;
    body: String;
    key?: any;
    children?: ReactNode
}