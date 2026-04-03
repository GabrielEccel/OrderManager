export interface AccountDatabase {
    id: number,
    name: string,
    document: string,
    phone: string,
    street?: string,
    number?: string,
    district?: string,
    city?: string
}