export interface User{
    id : number;
    isAdmin : boolean;
    email : string;
    token : string;
    customerId?: number;
}