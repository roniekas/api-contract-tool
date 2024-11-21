"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated" && !session || !session) {
            router.replace("/auth/signin");
        }
    }, [session, status, router]); // Dependencies ensure this effect runs correctly

    if (status === "loading") return <p>Loading..</p>;

    // Avoid rendering content until the redirection logic has been processed
    if (status === "unauthenticated") return null;

    return <div>Welcome to your dashboard, {session?.user?.name}</div>;
}
