"use client"

import withAuth from "@/hoc/with-auth";
import {UserDetails} from "@/type";

function AdminPage({userDetails}: {userDetails: UserDetails}) {
    console.log('props admin', {userDetails})
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
        </div>
    );
}

export default withAuth(AdminPage);
