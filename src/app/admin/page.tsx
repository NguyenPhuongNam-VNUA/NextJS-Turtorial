'use client'

import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

const Admin = () => {
   const router = useRouter();

    return (
        <div>
            <h1>Admin Page</h1>
            <p>This is the admin page.</p>
            <Button variant="success" onClick={() => router.push("/")}> Back home </Button>
        </div>
    );
}

export default Admin;