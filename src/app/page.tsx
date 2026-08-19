import Link from "next/link";
import style1 from '@/styles/app.module.css';
import style2 from '@/styles/app2.module.css';

export default function Home() {
  return (
    <div>
      <main>
        <ul>
          <li>
            <Link href={"/admin"} className={style1["red"]}> 
              <span className={style2["red"]}>Admin page</span>
            </Link>
          </li>

          <li>
            <Link href={"/client"} className="green"> Client page</Link>
          </li>    
        </ul>
      </main>
    </div>
  );
}
