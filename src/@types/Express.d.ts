declare namespace Express {
  export interface User {
    id?: string;
    createdAt?: number;
    username?: string;
    password?: string;
    name?: string;
    hash?: string;
    salt?: string;
  }
}
