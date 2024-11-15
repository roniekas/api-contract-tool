"use client";

import { useSession, signIn } from "next-auth/react"

export default function Dashboard() {
    const { data: session, status } = useSession();

    if (status === "loading") return <p>Loading...</p>;
    if (!session) {
        return (
            <div>
                <p>You need to be signed in to view this page.</p>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        );
    }

    return <div>Welcome to your dashboard, {session.user?.name}</div>;
}
