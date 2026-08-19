import Link from "next/link";
import AppTable from "@/components/app.table";

export default function Home() {
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

