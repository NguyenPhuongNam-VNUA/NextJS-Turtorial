'use client'
import Link from "next/link";
import AppTable from "@/components/app.table";
import useSWR from 'swr';

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  
  const {data, error, isLoading} = useSWR(
    "http://localhost:8000/blogs", 
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  console.log(">>> Check res: ", data);

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

