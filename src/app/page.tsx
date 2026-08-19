// 'use client'
import Link from "next/link";
import AppTable from "@/components/app.table";
// import { useEffect } from "react";

export default async function Home() {
  const res = await fetch("http://localhost:8000/blogs");
  const data = await res.json();
  console.log(">>> Check res: ", data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log(">>> Check res: ", data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <ul className="my-3">
        <li>
          <Link href="/admin">Admin</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
      <hr />
      <AppTable />
    </div>
  );
}

