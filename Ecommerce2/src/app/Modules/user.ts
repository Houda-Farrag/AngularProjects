export interface User {
    id?: string,
    name: string,
    email: string,
    mobile: [],
    address: { city: string, postalCode: string, streat: string }
    , password?: string
}
