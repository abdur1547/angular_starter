export type LoginCredentials = {
    email: string;
    password: string;
};

export type LoginResponce = {
    success: boolean;
    data: {
        access_token: string;
        refresh_token: string;
    }
};