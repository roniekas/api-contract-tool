import React from "react";
import {AuthProvider} from "@/context/auth/auth-context";
import {ThemeProvider} from "@/context/theme/theme-provider";
import {NewProviderProvider} from "@/context/new-provider/new-provider";
import {SessionProvider} from "next-auth/react";

export function AppProvider({children}: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <AuthProvider>
                <ThemeProvider>
                    <NewProviderProvider>
                        {children}
                    </NewProviderProvider>
                </ThemeProvider>
            </AuthProvider>
        </SessionProvider>
    );
}
