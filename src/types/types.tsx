import type { ReactNode } from "react";

export type AuthContextType = {
    token: string | null;
    login: (newToken: string | null) => void;
    logout: () => void;
};

export type SecretProps = {
    author: string;
    id: number;
    origin: string;
    quote: string;
    index: number;
};

export type AuthProviderProps = {
    children: ReactNode;
};

export type PageContainerProps = {
    children?: ReactNode;
};

export type HeaderProps = {
    title: string
};
