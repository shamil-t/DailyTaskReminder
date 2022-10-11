export interface User {
    name: string;
    email: string;
    empID: number;
    designation: string;
    manager: {
        name: string;
        email: string;
    }
}