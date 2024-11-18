"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Sign In</h1>
            <p>Please sign in to access your account.</p>
            <button onClick={() => signIn("github")}>Sign in with GitHub</button>
            <button onClick={() => signIn("google")}>Sign in with Google</button>
        </div>
    );
}
