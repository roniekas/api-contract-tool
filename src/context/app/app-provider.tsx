import React, {useState} from "react";
import {AuthProvider} from "@/context/auth/auth-context";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "@/theme";
import {NewProviderProvider} from "@/context/new-provider/new-provider";
import {SessionProvider} from "next-auth/react";

export function AppProvider({children}: { children: React.ReactNode }) {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    }
    return (
        <SessionProvider>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <NewProviderProvider>
                        <button
                            onClick={toggleTheme}
                            style={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                padding: "10px",
                                cursor: "pointer",
                            }}
                        >
                            {theme === lightTheme ? "Dark Mode" : "Light Mode"}
                        </button>
                        {children}
                    </NewProviderProvider>
                </ThemeProvider>
            </AuthProvider>
        </SessionProvider>
    );
}
