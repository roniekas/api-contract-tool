"use client"
import './globals.css';

import {SessionProvider} from "next-auth/react";
import {AuthProvider} from "@/context";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <SessionProvider>
            <AuthProvider>
                {children} {/* This will render the page content */}
            </AuthProvider>
        </SessionProvider>
        </body>
        </html>
    );
}
