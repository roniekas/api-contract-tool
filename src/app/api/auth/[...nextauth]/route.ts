import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@/lib/primsa";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({session, token}: { session: { user: { id: () => string } }, token: string }) {
            session.user.id = token.sub;
            return session;
        },
        async jwt({token, user}: { token: { id: string }, user: { id: string } }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },
    theme: {
        colorScheme: "dark",
        brandColor: "#5f3482",
        logo: "https://play-lh.googleusercontent.com/NJHYsVpH_64v5yeQOLN6zxM-nX6f82-DhjhrZEjlQg6Nd0WywAxCky2SFMQ6VEjzenE",
        buttonText: "#9e34f0"
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: '/auth/new-user'
    }
};

// @ts-ignore
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
