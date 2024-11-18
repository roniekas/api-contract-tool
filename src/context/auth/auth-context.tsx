"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { AuthContextType, UserDetails } from "@/type";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            setUserDetails({
                id: session.user.name as string,
                name: session.user.name!,
                email: session.user.email!,
                role: "admin",
            });
        } else {
            setUserDetails(null);
        }
        setIsLoading(status === "loading");
    }, [session, status]);

    const login = () => {
        console.log("Login logic goes here");
    };

    const logout = () => {
        console.log("Logout logic goes here");
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!userDetails,
                isLoading,
                login,
                logout,
                userDetails,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
