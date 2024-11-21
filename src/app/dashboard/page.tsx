"use client";

import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Dashboard() {
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        console.log({status, session});
        if (status === "authenticated" && !session || !session && status !== "loading") {
            console.log('wol');
            router.replace("/auth/signin");
        }
    }, [session, status, router]);

    function logout() {
        router.replace("/auth/signout");
    }

    function home() {
        router.replace("/");
    }

    if (status === "loading") return <p>Loading..</p>;

    if (status === "unauthenticated") return null;

    return <div>Welcome to your dashboard, {session?.user?.name} {" "}
        <button onClick={() => logout()}>Logout</button>
        {" "}
        <button onClick={() => home()}>Home</button>
    </div>;
}
