type NewProviderContextType = {
    data: string | null;
    isLoading: boolean;
    fetchData: () => Promise<void>;
};

export type {
    NewProviderContextType,
}