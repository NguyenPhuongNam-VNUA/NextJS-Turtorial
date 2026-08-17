'use client'

import { useRouter } from "next/navigation";

const Admin = () => {
   const router = useRouter();

    return (
        <div>
            <h1>Admin Page</h1>
            <p>This is the admin page.</p>
            <button onClick={() => router.push("/")}> Back home </button>
        </div>
    );
}

export default Admin;