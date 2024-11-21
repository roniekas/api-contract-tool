"use client"
import './globals.css';

import {AppProvider} from "@/context/app/app-provider";
import React from "react";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <AppProvider>
            {children}
        </AppProvider>
        </body>
        </html>
    );
}
