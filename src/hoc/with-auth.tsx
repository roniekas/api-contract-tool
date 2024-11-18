"use client";

import React from "react";
import { useAuth } from "@/context";
import { UserDetails } from "@/type";

function withAuth<T extends {}>(WrappedComponent: React.ComponentType<T & { userDetails: UserDetails }>) {
    return function AuthenticatedComponent(props: T) {
        const { userDetails, isLoading, isAuthenticated } = useAuth();

        // Handle loading state
        if (isLoading) {
            return <div>Loading...</div>;
        }

        // Redirect or block unauthorized access
        if (!isAuthenticated || !userDetails) {
            return <div>You are not authorized to access this page.</div>;
        }

        // Pass `userDetails` as a prop to the wrapped component
        return <WrappedComponent {...props} userDetails={userDetails} />;
    };
}

export default withAuth;
