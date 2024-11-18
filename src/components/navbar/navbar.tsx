"use client";

import { useAuth } from "@/context";
import Link from "next/link";

export default function Navbar() {
    const { isAuthenticated, login, logout } = useAuth();

    return (
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#f5f5f5" }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

            {isAuthenticated ? (
                <>
                    <Link href="/dashboard">Dashboard</Link>
                    <button onClick={logout}>Sign Out</button>
                </>
            ) : (
                <button onClick={login}>Sign In</button>
            )}
        </nav>
    );
}
