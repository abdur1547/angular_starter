export interface SignupCredentials {
  email: string;
  name: string;
  password: string;
}

export interface SignupResponse {
  success: boolean;
  data: {
    id: number;
    avatar_url: string | null;
    email: string;
    name: string;
    provider: string | null;
    uid: string | null;
  };
}
