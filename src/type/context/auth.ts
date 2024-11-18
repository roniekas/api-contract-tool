type Context = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};

type Status = "authenticated" | "unauthenticated" | "loading";

type UserDetails = {
    id: string;
    name: string;
    email: string;
    role: string;
};

type AuthContextType = {
    userDetails: UserDetails | null;
    isLoading: boolean;
    login: () => void;
    logout: () => void;
    isAuthenticated: boolean;
};


export type {
    Context,
    Status,
    UserDetails,
    AuthContextType
}