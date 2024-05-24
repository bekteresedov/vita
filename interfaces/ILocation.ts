interface ILocationBase {
    city: string;
    address: string;
    phone: string;
}

export interface ILocationCardProps extends ILocationBase {
    onClick: () => void;
}


export interface Location extends ILocationBase {
    lat: number;
    lng: number;
}