export interface CreatePickupRouteBody {
    name:string;
    description:string;
    status:string;
    start_date:string
}
export interface CreatePickupRouteResponse{}

export interface UpdatePickupRouteResponse{}

export interface updatePickupRouteBody{
    name:string;
    description:string;
    status:string;
}

export interface PermanentDeletePickupRouteResponse{}
export interface DeletePickupRouteResponse{}

export interface GetAllPickupResponse{}
export interface GetOneRoute{}