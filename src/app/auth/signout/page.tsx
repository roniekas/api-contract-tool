"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function SignOutPage() {
    useEffect(() => {
        signOut({ callbackUrl: "/" });
    }, []);

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Signing Out...</h1>
            <p>You are being signed out. Please wait...</p>
        </div>
    );
}
