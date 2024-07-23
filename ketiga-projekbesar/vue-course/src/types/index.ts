export interface APIResponse<T>{
    message: string,
    statusCode: number,
    data:T
}
export type Image = {
    localpath: string,
    url: string,
    _id:string
}

export type User = {
    __v: number,
    _id: string,
    avatar: Image,
    createdAt: string,
    email: string,
    isEmailVerified: boolean,
    role: 'ADMIN' | 'USER',
    updatedAt: string,
    username:string,
}

export type Category = {
    __v: number,
    _id: string,
    createdAt: string,
    owner:string
    name: string,
}