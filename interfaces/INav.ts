import { ReactNode } from "react";

interface INavBase {
    href: string;
}

export interface INav extends INavBase {
    title: string;
}

export interface INavItemProps extends INavBase {
    children: ReactNode;
}