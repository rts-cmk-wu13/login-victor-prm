import type { ReactNode } from "react";

export type AuthContextType = {
    token: string | null;
    login: (newToken: string | null) => void;
    logout: () => void;
};

export type AuthProviderProps = {
    children: ReactNode;
};

export type PageContainerProps = {
    children?: ReactNode;
};
