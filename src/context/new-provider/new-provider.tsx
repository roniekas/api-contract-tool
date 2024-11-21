"use client";

import React, { createContext, useContext, useState } from "react";
import { NewProviderContextType } from "@/type";

const NewProviderContext = createContext<NewProviderContextType | undefined>(undefined);

export function NewProviderProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/new-provider");
            const result = await response.json();
            setData(result.data);
        } catch (error) {
            console.error("Failed to fetch new provider data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <NewProviderContext.Provider value={{ data, isLoading, fetchData }}>
            {children}
        </NewProviderContext.Provider>
    );
}

export function useNewProvider() {
    const context = useContext(NewProviderContext);
    if (!context) {
        throw new Error("useNewProvider must be used within a NewProviderProvider");
    }
    return context;
}
