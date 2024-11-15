"use client";

import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    let errorMessage = "An unknown error occurred. Please try again.";
    if (error === "OAuthAccountNotLinked") {
        errorMessage = "You need to sign in with the same account you originally used.";
    } else if (error === "EmailSignin") {
        errorMessage = "Email sign-in failed. Please check your email address and try again.";
    }

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Authentication Error</h1>
            <p>{errorMessage}</p>
        </div>
    );
}
