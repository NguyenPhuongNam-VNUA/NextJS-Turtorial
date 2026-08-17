import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
          <li>
            <Link href={"/admin"}> Admin page</Link>
          </li>

          <li>
            <Link href={"/client"}> Client page</Link>
          </li>    
        </ul>
      </main>
    </div>
  );
}
