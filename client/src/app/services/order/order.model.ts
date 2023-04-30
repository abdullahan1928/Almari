export interface Order {
    _id: string;
    userId: string;
    address: string;
    cart: Record<string, any>[];
}