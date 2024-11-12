export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponce {
    success: boolean;
    data: {
        access_token: string;
        refresh_token: string;
    }
}
